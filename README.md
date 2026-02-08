# 테토남/포테토남/에겐남 유형 테스트 💝

Next.js와 Tailwind CSS로 만든 귀여운 성격 유형 테스트 웹사이트입니다!

## ✨ 특징

- 📱 **모바일 최적화**: 모바일 UI에 완벽하게 최적화
- 🎨 **파스텔 디자인**: 부드럽고 귀여운 파스텔 톤 색상
- 📊 **프로그레스 바**: 진행 상황을 한눈에 확인
- 💬 **카카오톡 공유**: 결과를 친구들과 쉽게 공유
- 📸 **이미지 저장**: 결과를 이미지로 저장하여 SNS 공유
- 🔗 **링크 복사**: 테스트 링크를 클립보드에 복사
- ⏱️ **로딩 화면**: 결과 분석 중 3초 대기 화면
- 💰 **광고 수익화**: Google AdSense 광고 영역 구현
- ⚡ **빠른 성능**: Next.js 15의 최신 기능 활용

## 🚀 시작하기

### 1. 패키지 설치

\`\`\`bash
npm install
\`\`\`

### 2. 카카오 개발자 설정 (선택사항)

카카오톡 공유 기능을 사용하려면:

1. [Kakao Developers](https://developers.kakao.com/)에 접속
2. 애플리케이션 추가
3. JavaScript 키 복사
4. `.env.local` 파일에 키 입력:

\`\`\`
NEXT_PUBLIC_KAKAO_KEY=your_javascript_key_here
\`\`\`

### 3. 분석 완료 수 실데이터 (선택사항)

메인 페이지의 "현재까지 N명의 애인 분석 완료" 숫자를 실제 완료 건수로 표시하려면 [Upstash Redis](https://upstash.com/)를 사용합니다.

1. [Upstash Console](https://console.upstash.com/)에서 Redis 데이터베이스 생성
2. REST URL과 토큰을 복사한 뒤 `.env.local` 또는 Vercel 환경 변수에 추가:

\`\`\`
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here
\`\`\`

설정하지 않으면 기본값 1,234명이 표시됩니다.

### 4. 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3001](http://localhost:3001)을 열어보세요!

## 📁 프로젝트 구조

\`\`\`
teto/
├── app/
│   ├── layout.tsx          # 레이아웃 설정
│   ├── page.tsx            # 메인 페이지
│   ├── globals.css         # 전역 스타일
│   ├── test/
│   │   └── page.tsx        # 테스트 페이지
│   ├── loading/
│   │   └── page.tsx        # 로딩 페이지 (광고 최적화)
│   └── result/
│       └── page.tsx        # 결과 페이지
├── components/
│   ├── GoogleAdsense.tsx   # 애드센스 컴포넌트
│   └── AdPlaceholder.tsx   # 광고 플레이스홀더
├── data/
│   ├── questions.ts        # 질문 데이터
│   ├── results.ts          # 결과 유형 데이터
│   └── data-structure.json # 데이터 구조 JSON
└── ...
\`\`\`

## 🎯 유형 소개 (총 8가지)

- **테토남** (👑): 주도적인 리더형 - 외향적이고 적극적으로 관계를 이끄는 스타일
- **포테토남** (🥔): 듬직한 감자형 - 순박하고 편안한 담백한 매력의 스타일
- **에겐남** (🌙): 조용한 낭만형 - 내향적이지만 깊은 감성을 가진 스타일
- **고구마남** (🍠): 달달한 성실형 - 포테토보다 달달하지만 답답할 정도로 성실·묵묵한 스타일
- **치즈남** (🧀): 사르르 녹는 유연형 - 어디든 녹아들어 분위기를 부드럽게 만드는 에겐 변형
- **살사남** (🌶️): 톡 쏘는 매력형 - 말재주로 주도권 잡고 분위기 리드하는 테토 변형
- **에헴남** (📜): 에헴 하는 선비형 - 다 맞춰주다가 가끔 '에헴' 선비질 하는 귀여운 스타일
- **에라남** (🍃): 에라 모르겠다 극수동형 - "네가 하자는 대로 다 할게" 극강 평화주의자

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Deployment**: Vercel (권장)

## 📝 커스터마이징

### 질문 수정하기

`data/questions.ts` 파일에서 질문을 추가하거나 수정할 수 있어요:

\`\`\`typescript
{
  id: 1,
  question: "당신의 질문을 입력하세요",
  answers: [
    { text: "답변 1", type: "T" },
    { text: "답변 2", type: "P" },
    { text: "답변 3", type: "E" },
  ],
}
\`\`\`

### 결과 유형 수정하기

`data/results.ts` 파일에서 결과 내용을 커스터마이징할 수 있어요!

### 색상 변경하기

`tailwind.config.ts`의 pastel 색상을 원하는 색으로 바꿔보세요:

\`\`\`typescript
colors: {
  pastel: {
    pink: '#FFD6E8',
    purple: '#E5D4FF',
    // ... 더 많은 색상
  }
}
\`\`\`

## 🌐 배포하기

### Vercel (추천!)

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포!

환경 변수 `NEXT_PUBLIC_KAKAO_KEY`를 Vercel 설정에 추가하는 것을 잊지 마세요!

## 💰 수익화 (Google AdSense)

이 프로젝트는 광고 수익화를 위한 구조가 이미 구현되어 있습니다!

### 🎯 광고 배치 위치

1. **로딩 페이지** (`/loading`)
   - 결과 분석 중 3초 대기 화면
   - 상단 + 하단 광고 배치
   - 광고 노출 시간 보장

2. **결과 페이지** (`/result`)
   - 상단: 결과 확인 전 첫 화면
   - 하단: 공유 버튼 이후

### 📝 설정 방법

자세한 설정 방법은 **[ADSENSE_GUIDE.md](./ADSENSE_GUIDE.md)** 파일을 참고하세요!

간단 요약:
1. [Google AdSense](https://www.google.com/adsense/) 가입
2. \`.env.local\`에 클라이언트 ID 입력
3. \`app/layout.tsx\`와 \`components/GoogleAdsense.tsx\`에 ID 적용
4. 광고 슬롯 ID를 \`AdPlaceholder.tsx\`에 추가

### 💡 광고 최적화 전략

- ✅ 로딩 화면 3초 대기로 광고 노출 극대화
- ✅ 모바일 친화적 반응형 디자인
- ✅ 파스텔 톤으로 자연스러운 광고 영역
- ✅ 전략적 위치 배치 (상단/하단)

---

## 💡 팁

- 모바일 화면에서 테스트해보세요! 📱
- 친구들과 공유해서 재미있게 비교해보세요! 🎉
- 질문과 결과를 자유롭게 커스터마이징하세요! ✏️
- 광고 수익화로 지속 가능한 서비스를 만들어보세요! 💰

## 📄 라이선스

MIT License - 자유롭게 사용하고 수정하세요!

---

만든 사람: Cursor AI 💜
