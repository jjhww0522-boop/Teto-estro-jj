# 결과 페이지 동적 라우트 추가 방법 (`/result/[type]`)

sitemap에 등록된 URL(`/result/teto`, `/result/potato` 등)이 실제로 열리도록 동적 라우트를 추가하는 방법을 정리했습니다.

---

## 1. 구조 요약

| 경로 | 용도 |
|------|------|
| `/result?answers=TTTPP...` | 테스트 완료 후 이동 (12문항 답으로 결과 계산) |
| `/result/teto`, `/result/potato` 등 | 유형별 고정 URL (SEO·공유용) |

- **쿼리 방식**: `app/result/page.tsx` → `answers` 파라미터로 유형 계산 후 `ResultView` 표시.
- **슬러그 방식**: `app/result/[type]/page.tsx` → `type`(예: `teto`)으로 유형 조회 후 같은 `ResultView`로 표시.

---

## 2. 필요한 코드 요소

### 2.1 슬러그 ↔ 결과 키 매핑 (`data/results.ts`)

sitemap/URL에 쓰는 **슬러그**와 내부 **결과 키**(T, P, E …)를 연결합니다.

```ts
// data/results.ts 하단에 추가

export const SLUG_TO_KEY: Record<string, string> = {
  teto: "T",
  potato: "P",
  egen: "E",
  sweet_potato: "G",
  cheese: "C",
  salsa: "S",
  ehem: "H",
  era: "A",
};

export const RESULT_SLUGS = Object.keys(SLUG_TO_KEY);

export function getResultBySlug(slug: string): ResultType | null {
  const key = SLUG_TO_KEY[slug];
  return key ? results[key] ?? null : null;
}
```

- **슬러그**: URL 경로에 쓰는 값 (`teto`, `potato`, …).
- **결과 키**: `results` 객체의 키 (`T`, `P`, …).

### 2.2 공통 결과 UI 컴포넌트 (`components/ResultView.tsx`)

- **역할**: 한 유형의 결과를 표시 (이모지, 제목, 설명, 궁합, 공유/다운로드 버튼 등).
- **props**: `result`(유형 데이터), `shareUrl`(공유할 때 쓸 주소).
- **사용처**:
  - `app/result/page.tsx` → `shareUrl`: `/result?answers=...`
  - `app/result/[type]/page.tsx` → `shareUrl`: `/result/{type}`

두 페이지 모두 같은 `ResultView`를 쓰면 UI·동작을 한 곳에서만 관리할 수 있습니다.

### 2.3 동적 라우트 페이지 (`app/result/[type]/page.tsx`)

```ts
import { notFound } from "next/navigation";
import { getResultBySlug, RESULT_SLUGS } from "@/data/results";
import ResultView from "@/components/ResultView";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

interface PageProps {
  params: Promise<{ type: string }>;
}

// 빌드 시 /result/teto, /result/potato 등 미리 생성
export async function generateStaticParams() {
  return RESULT_SLUGS.map((type) => ({ type }));
}

export default async function ResultTypePage({ params }: PageProps) {
  const { type } = await params;
  const result = getResultBySlug(type);
  if (!result) notFound();
  const shareUrl = `${BASE_URL}/result/${type}`;
  return <ResultView result={result} shareUrl={shareUrl} />;
}
```

- **`generateStaticParams`**: 배포 시 `RESULT_SLUGS`에 있는 타입별로 정적 페이지 생성.
- **`getResultBySlug(type)`**: 알 수 없는 `type`이면 `null` → `notFound()` 호출로 404 처리.
- **`shareUrl`**: 이 페이지 주소(`/result/{type}`)를 그대로 공유 링크로 사용.

---

## 3. sitemap과의 연결

`app/sitemap.ts`에서 아래처럼 같은 슬러그를 쓰면 됩니다.

```ts
const types = ["teto", "potato", "egen", "cheese", "era", "salsa", "ehem", "sweet_potato"];

const resultUrls = types.map((type) => ({
  url: `${baseUrl}/result/${type}`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));
```

`types` 배열은 `RESULT_SLUGS`(또는 `Object.keys(SLUG_TO_KEY)`)와 동일하게 맞추면 됩니다.

---

## 4. 유형 추가/변경 시 체크리스트

1. **`data/results.ts`**
   - `results`에 새 키(예: `X`)와 데이터 추가.
   - `SLUG_TO_KEY`에 `새슬러그: "X"` 추가.
   - `RESULT_SLUGS`는 `Object.keys(SLUG_TO_KEY)`로 두면 자동 반영.

2. **`app/sitemap.ts`**
   - `types` 배열에 새 슬러그 추가 (또는 `RESULT_SLUGS`를 import해서 사용).

3. **`app/result/[type]/page.tsx`**
   - `generateStaticParams`가 `RESULT_SLUGS`를 쓰고 있으면 수정 불필요.

---

## 5. 정리

- **슬러그 매핑**: `data/results.ts`의 `SLUG_TO_KEY`, `getResultBySlug`, `RESULT_SLUGS`.
- **공통 UI**: `ResultView`에 `result` + `shareUrl` 전달.
- **동적 라우트**: `app/result/[type]/page.tsx`에서 `type`으로 결과 조회 후 `ResultView` 렌더, 잘못된 타입은 `notFound()`.

이렇게 하면 sitemap에 넣은 `/result/teto` 등이 실제 페이지로 열리고, 공유 시에도 같은 URL이 사용됩니다.
