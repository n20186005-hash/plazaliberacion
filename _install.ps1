$ErrorActionPreference = 'Continue'
Set-Location 'h:\GitHub\plazaliberacion'
Write-Output "==== pnpm install (no-frozen-lockfile) ===="
pnpm install --no-frozen-lockfile 2>&1 | Out-File -Encoding utf8 'h:\GitHub\plazaliberacion\_install.log'
Write-Output "==== pnpm check ===="
pnpm check 2>&1 | Out-File -Encoding utf8 'h:\GitHub\plazaliberacion\_check.log'
Write-Output "==== pnpm build ===="
pnpm build 2>&1 | Out-File -Encoding utf8 'h:\GitHub\plazaliberacion\_build.log'
Write-Output "==== exit_code_check ===="
if (Test-Path 'h:\GitHub\plazaliberacion\_check.log') { Write-Output "check.log exists" }
if (Test-Path 'h:\GitHub\plazaliberacion\_build.log') { Write-Output "build.log exists" }