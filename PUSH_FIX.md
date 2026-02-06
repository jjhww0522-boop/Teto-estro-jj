# 푸시 실패 해결 (error: failed to push some refs)

## 왜 실패했나요?

1. **커밋이 없음**  
   `git commit` 할 때 "Author identity unknown" 때문에 **커밋이 되지 않았습니다.**  
   → 로컬에 커밋이 없으면 브랜치(예: main)도 없고, 푸시할 내용이 없습니다.

2. **"src refspec main does not match any"**  
   = 로컬에 `main` 브랜치가 없다는 뜻 (커밋이 없어서 브랜치가 생성되지 않음)

---

## 해결 순서 (터미널에서 아래만 순서대로 실행)

### 1단계: Git 사용자 설정 (한 번만 하면 됨)

본인 GitHub 이메일과 이름으로 바꿔서 실행하세요.

```powershell
git config --global user.email "본인GitHub이메일@example.com"
git config --global user.name "본인이름"
```

예시:
```powershell
git config --global user.email "jjhww0522@gmail.com"
git config --global user.name "jjhww0522-boop"
```

---

### 2단계: 커밋 만들기

```powershell
cd C:\Users\82102\Desktop\teto
git add .
git commit -m "테스트 사이트 첫 업로드"
```

이제 "1 file changed" 또는 "XX files changed" 메시지가 나오면 **커밋 성공**입니다.

---

### 3단계: main 브랜치로 맞추고 푸시

```powershell
git branch -M main
git push -u origin main
```

GitHub 로그인(또는 토큰) 창이 뜨면 인증하면 됩니다.

---

## 요약

| 단계 | 명령 | 설명 |
|------|------|------|
| 1 | `git config --global user.email "..."` | 커밋 작성자 이메일 |
| 1 | `git config --global user.name "..."` | 커밋 작성자 이름 |
| 2 | `git add .` → `git commit -m "..."` | 첫 커밋 생성 |
| 3 | `git branch -M main` → `git push -u origin main` | main으로 푸시 |

**커밋이 있어야 브랜치가 생기고, 그 다음에만 push가 됩니다.**
