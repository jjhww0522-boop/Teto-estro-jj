@echo off
echo 커밋 메시지를 입력하세요 (기본: 연구 리포트 및 애인 문구 반영)
set /p msg="메시지 (Enter=기본): "
if "%msg%"=="" set msg=연구 리포트 및 애인 문구 반영
"C:\Program Files\Git\bin\git.exe" commit -m "%msg%"
"C:\Program Files\Git\bin\git.exe" push
echo.
echo 완료. Vercel에서 자동 배포가 시작됩니다.
pause
