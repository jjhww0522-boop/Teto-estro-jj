# 🎯 Google AdSense 설정 가이드

구글 애드센스를 통해 웹사이트를 수익화하는 방법을 단계별로 설명합니다!

---

## 📋 목차

1. [AdSense 가입 및 승인받기](#1-adsense-가입-및-승인받기)
2. [광고 단위 생성하기](#2-광고-단위-생성하기)
3. [프로젝트에 적용하기](#3-프로젝트에-적용하기)
4. [광고 배치 위치](#4-광고-배치-위치)
5. [수익 극대화 팁](#5-수익-극대화-팁)

---

## 1. AdSense 가입 및 승인받기

### 1단계: AdSense 가입

1. [Google AdSense](https://www.google.com/adsense/) 접속
2. "시작하기" 버튼 클릭
3. 웹사이트 URL 입력 (배포된 도메인)
4. 구글 계정으로 로그인
5. 결제 정보 입력

### 2단계: 웹사이트에 AdSense 코드 추가

가입 후 제공되는 코드를 `app/layout.tsx` 파일의 `<head>` 태그에 추가합니다.

**이미 추가되어 있음!** ✅

```tsx
<script 
  async 
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
></script>
```

### 3단계: 승인 대기

- 구글에서 웹사이트를 검토합니다 (보통 1-2일 소요)
- 승인 조건:
  - ✅ 독창적이고 가치 있는 콘텐츠
  - ✅ 최소 20-30개의 페이지 뷰
  - ✅ 6개월 이상 된 도메인 (권장)
  - ✅ 모바일 친화적 디자인

---

## 2. 광고 단위 생성하기

### 2-1. AdSense 대시보드 접속

1. [AdSense 로그인](https://www.google.com/adsense/)
2. 좌측 메뉴에서 **"광고" > "광고 단위 기준"** 클릭

### 2-2. 광고 단위 만들기

추천하는 광고 단위:

#### 📱 모바일 최적화 (자동 크기)

```
광고 유형: 디스플레이 광고
크기: 반응형 (Responsive)
이름: "teto-test-auto"
```

#### 🖥️ 리더보드 (상단/하단)

```
광고 유형: 디스플레이 광고
크기: 728x90 (Leaderboard)
이름: "teto-test-leaderboard"
```

#### 📊 직사각형 (중간 콘텐츠)

```
광고 유형: 디스플레이 광고
크기: 300x250 (Medium Rectangle)
이름: "teto-test-rectangle"
```

### 2-3. 광고 코드 복사

광고 단위를 만들면 **"data-ad-slot"** 값을 받게 됩니다.

예시:
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1234567890123456"
     data-ad-slot="9876543210"
     data-ad-format="auto"></ins>
```

여기서 `data-ad-slot="9876543210"` 값을 복사하세요!

---

## 3. 프로젝트에 적용하기

### 3-1. 환경 변수 설정

`.env.local` 파일을 열고 실제 값으로 교체:

```env
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-1234567890123456
```

### 3-2. layout.tsx 수정

`app/layout.tsx` 파일의 22번째 줄에서 `ca-pub-XXXXXXXXXXXXXXXX`를 실제 클라이언트 ID로 교체:

```tsx
<script 
  async 
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
  crossOrigin="anonymous"
></script>
```

### 3-3. GoogleAdsense 컴포넌트 수정

`components/GoogleAdsense.tsx` 파일의 31번째 줄 수정:

```tsx
data-ad-client="ca-pub-1234567890123456"
```

### 3-4. AdPlaceholder 컴포넌트에 실제 광고 적용

`components/AdPlaceholder.tsx` 파일에서 주석 처리된 부분을 활성화:

**현재 (Placeholder):**
```tsx
{/* <GoogleAdsense adSlot="XXXXXXXXXX" /> */}
```

**변경 후 (실제 광고):**
```tsx
<GoogleAdsense adSlot="9876543210" />
```

그리고 아래 임시 박스 제거:
```tsx
{/* 임시 Placeholder 박스 - 실제 광고 사용 시 삭제 */}
<div className="bg-white/40 rounded-xl p-8 text-center">
  <p className="text-sm text-gray-400 font-mono">
    728 x 90 (Leaderboard)
  </p>
</div>
```

---

## 4. 광고 배치 위치

현재 프로젝트에 구현된 광고 위치:

### ✅ 로딩 페이지 (`/loading`)

- **상단 광고**: 결과 분석 전 사용자 대기 시간 활용
- **하단 광고**: 스크롤 시 추가 노출
- **효과**: 3초간 강제 대기 → 광고 노출 시간 보장

### ✅ 결과 페이지 (`/result`)

- **상단 광고**: 결과 확인 전 첫 화면
- **하단 광고**: 공유 버튼 이후 배치

### 🎯 광고 노출 극대화 전략

1. **로딩 화면 3초 대기** ⏱️
   - 사용자가 결과를 기다리는 동안 광고 노출
   - 자연스러운 광고 시청 유도

2. **결과 페이지 상하단 배치** 📍
   - 스크롤 전후로 2번의 광고 노출 기회
   - 공유 버튼 클릭 전 하단 광고 확인

3. **모바일 최적화 디자인** 📱
   - 파스텔 톤의 부드러운 광고 영역
   - 콘텐츠와 자연스럽게 어울리는 배치

---

## 5. 수익 극대화 팁

### 💰 광고 배치 Best Practices

1. **Above the Fold** (스크롤 전 영역)
   - ✅ 로딩 페이지 상단
   - ✅ 결과 페이지 최상단

2. **컨텐츠 사이**
   - 성격 특징과 궁합 정보 사이에 추가 가능

3. **페이지 하단**
   - ✅ 공유 버튼 이후 배치됨

### 📈 CTR(클릭률) 높이는 방법

1. **자동 광고 활성화**
   - AdSense 대시보드에서 "자동 광고" 켜기
   - 구글 AI가 최적 위치에 광고 배치

2. **반응형 광고 단위 사용**
   - 모바일/태블릿/데스크톱 자동 대응
   - 화면 크기에 맞는 최적 크기 표시

3. **A/B 테스트**
   - 광고 위치 변경해보기
   - 색상/크기 조정

### ⚠️ 주의사항

❌ **절대 하지 말아야 할 것:**
- 자신의 광고 클릭
- 가족/친구에게 클릭 요청
- 광고 근처에 "클릭하세요" 문구
- 광고 위치 강제 스크롤

✅ **권장사항:**
- 자연스러운 사용자 경험 유지
- 콘텐츠와 조화로운 디자인
- 정책 준수

---

## 🚀 배포 체크리스트

배포 전 확인 사항:

- [ ] AdSense 계정 승인 완료
- [ ] `.env.local`에 실제 클라이언트 ID 입력
- [ ] `layout.tsx`에 클라이언트 ID 적용
- [ ] `GoogleAdsense.tsx`에 클라이언트 ID 적용
- [ ] `AdPlaceholder.tsx`에 광고 슬롯 ID 입력
- [ ] 배포 환경 변수 설정 (Vercel 등)
- [ ] 실제 도메인에서 광고 테스트

---

## 📊 예상 수익

방문자 수에 따른 예상 수익 (참고용):

| 일일 방문자 | 페이지뷰 | 예상 월 수익 (USD) |
|------------|----------|-------------------|
| 100명      | 300      | $5 - $15          |
| 500명      | 1,500    | $25 - $75         |
| 1,000명    | 3,000    | $50 - $150        |
| 5,000명    | 15,000   | $250 - $750       |
| 10,000명   | 30,000   | $500 - $1,500     |

*실제 수익은 클릭률, 광고 단가, 지역 등에 따라 달라집니다.*

---

## 🔗 유용한 링크

- [Google AdSense 홈](https://www.google.com/adsense/)
- [AdSense 정책 센터](https://support.google.com/adsense/answer/48182)
- [광고 단위 만들기](https://support.google.com/adsense/answer/9183549)
- [수익 극대화 가이드](https://support.google.com/adsense/topic/1250104)

---

## 💡 문제 해결

### Q: 광고가 표시되지 않아요

**A:** 다음을 확인하세요:
1. AdSense 승인 완료 확인
2. 클라이언트 ID가 올바른지 확인
3. 광고 슬롯 ID가 올바른지 확인
4. 브라우저 광고 차단 해제
5. 개발자 도구에서 에러 확인

### Q: "광고가 제한되었습니다" 메시지

**A:** AdSense 정책 위반 가능성
- 유효하지 않은 트래픽 감지
- 정책 위반 콘텐츠
- 승인 대기 중

### Q: 수익이 발생하지 않아요

**A:** 
- 최소 트래픽 필요 (하루 100+ 방문자)
- CTR 개선 필요
- 광고 위치 최적화
- 시간이 필요 (보통 1-2주 후 안정화)

---

**수익화 성공을 응원합니다! 💰✨**
