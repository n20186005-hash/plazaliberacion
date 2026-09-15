@echo off
setlocal enabledelayedexpansion
cd /d "h:\GitHub\plazaliberacion"

set RESULT_FILE=h:\GitHub\plazaliberacion\LOCK_GEN_RESULT.txt
set LOCK_FILE=h:\GitHub\plazaliberacion\pnpm-lock.yaml
set NM_DIR=h:\GitHub\plazaliberacion\node_modules

echo === Start time: %date% %time% > "%RESULT_FILE%"
echo Current dir: %cd% >> "%RESULT_FILE%"
echo. >> "%RESULT_FILE%"

echo === Cleanup old files === >> "%RESULT_FILE%"
if exist "%LOCK_FILE%" (
  del /f /q "%LOCK_FILE%"
  echo Deleted old pnpm-lock.yaml >> "%RESULT_FILE%"
)
if exist "%NM_DIR%" (
  rmdir /s /q "%NM_DIR%"
  echo Deleted old node_modules >> "%RESULT_FILE%"
)
echo. >> "%RESULT_FILE%"

echo === Running pnpm install with --lockfile-only === >> "%RESULT_FILE%"
echo Command: "C:\Users\dcc\AppData\Roaming\npm\pnpm.cmd" install --no-frozen-lockfile --lockfile-only --config.safe-save=false --config.node-linker=hoisted >> "%RESULT_FILE%"
echo. >> "%RESULT_FILE%"

"C:\Users\dcc\AppData\Roaming\npm\pnpm.cmd" install --no-frozen-lockfile --lockfile-only --config.safe-save=false --config.node-linker=hoisted >> "%RESULT_FILE%" 2>&1
set EXIT_CODE=%ERRORLEVEL%

echo. >> "%RESULT_FILE%"
echo === Exit code: %EXIT_CODE% === >> "%RESULT_FILE%"
echo. >> "%RESULT_FILE%"

echo === Check results === >> "%RESULT_FILE%"
if exist "%LOCK_FILE%" (
  echo [OK] pnpm-lock.yaml created >> "%RESULT_FILE%"
  for /f "delims=" %%a in ('dir /s /a "%LOCK_FILE%" ^| find "File(s)"') do echo Size info: %%a >> "%RESULT_FILE%"
  for /f %%a in ('find /c /v "" ^< "%LOCK_FILE%"') do echo pnpm-lock.yaml line count: %%a >> "%RESULT_FILE%"
) else (
  echo [FAIL] pnpm-lock.yaml missing >> "%RESULT_FILE%"
)
if exist "%NM_DIR%" (
  echo [INFO] node_modules created >> "%RESULT_FILE%"
) else (
  echo [INFO] node_modules NOT created (expected with --lockfile-only) >> "%RESULT_FILE%"
)
echo. >> "%RESULT_FILE%"
echo === End time: %date% %time% === >> "%RESULT_FILE%"
