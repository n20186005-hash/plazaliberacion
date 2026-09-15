@echo off
cd /d "h:\GitHub\plazaliberacion"
del /f /q pnpm_new_log.txt 2>nul
echo === Running pnpm install === > pnpm_new_log.txt
echo Start time: %date% %time% >> pnpm_new_log.txt
echo. >> pnpm_new_log.txt
"C:\Users\dcc\AppData\Roaming\npm\pnpm.cmd" install --no-frozen-lockfile --config.safe-save=false >> pnpm_new_log.txt 2>&1
echo. >> pnpm_new_log.txt
echo End time: %date% %time% >> pnpm_new_log.txt
echo === Exit code: %ERRORLEVEL% === >> pnpm_new_log.txt
echo. >> pnpm_new_log.txt
echo === Check results === >> pnpm_new_log.txt
if exist "pnpm-lock.yaml" (echo [OK] pnpm-lock.yaml created >> pnpm_new_log.txt) else (echo [FAIL] pnpm-lock.yaml missing >> pnpm_new_log.txt)
if exist "node_modules" (echo [OK] node_modules created >> pnpm_new_log.txt) else (echo [FAIL] node_modules missing >> pnpm_new_log.txt)
if exist "pnpm-lock.yaml" (
  for /f %%a in ('find /c /v "" ^< pnpm-lock.yaml') do echo pnpm-lock.yaml line count: %%a >> pnpm_new_log.txt
)
