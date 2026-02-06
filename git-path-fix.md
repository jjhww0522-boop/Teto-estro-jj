# Git 명령어가 안 될 때 (PowerShell)

## 원인
Git은 설치되어 있지만 **PATH 환경 변수**에 없어서  
`git` 이라고만 치면 PowerShell이 어디서 실행 파일을 찾아야 할지 모릅니다.

---

## 해결 방법

### 방법 1: 지금 이 터미널에서만 (임시)

PowerShell에서 **한 번만** 실행:

```powershell
$env:Path += ";C:\Program Files\Git\bin"
```

그 다음부터 이 터미널 창에서는 `git init`, `git add .` 등이 동작합니다.  
**터미널을 닫으면 다시 PATH에서 빠져나갑니다.**

---

### 방법 2: 매번 전체 경로로 실행

`git` 대신 아래처럼 전체 경로로 실행:

```powershell
& "C:\Program Files\Git\bin\git.exe" init
& "C:\Program Files\Git\bin\git.exe" add .
& "C:\Program Files\Git\bin\git.exe" commit -m "Initial commit"
```

---

### 방법 3: PATH에 영구 추가 (추천)

**1) Windows 설정에서 추가**

1. `Win + R` → `sysdm.cpl` 입력 → Enter  
2. **고급** 탭 → **환경 변수**  
3. **사용자 변수**에서 **Path** 선택 → **편집**  
4. **새로 만들기** → `C:\Program Files\Git\bin` 입력  
5. 확인 후 **모든 창 닫기**  
6. **Cursor(또는 터미널)를 완전히 종료했다가 다시 실행**

**2) PowerShell에서 한 줄로 추가 (현재 사용자만)**

PowerShell을 **관리자 권한으로 실행**한 뒤:

```powershell
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\Git\bin", "User")
```

실행 후 **Cursor를 완전히 종료했다가 다시 켜면** 새 터미널에서 `git` 이 동작합니다.

---

## 확인

PATH 추가 후 새 터미널에서:

```powershell
git --version
```

`git version 2.x.x` 가 나오면 정상입니다.
