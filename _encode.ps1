$ErrorActionPreference = 'Continue'
$command = @'
Set-Location "h:\GitHub\plazaliberacion"
$logFile = "h:\GitHub\plazaliberacion\pnpm_new_log.txt"
Add-Content -Path $logFile -Value "=== $(Get-Date) Starting pnpm install ===" -Encoding UTF8
$pnpmPath = "C:\Users\dcc\AppData\Roaming\npm\pnpm.cmd"
& $pnpmPath install --no-frozen-lockfile --config.safe-save=false 2>&1 | ForEach-Object { Add-Content -Path $logFile -Value $_ -Encoding UTF8 }
Add-Content -Path $logFile -Value "=== Exit code: $LASTEXITCODE ===" -Encoding UTF8
Add-Content -Path $logFile -Value "pnpm-lock.yaml exists: $(Test-Path 'pnpm-lock.yaml')" -Encoding UTF8
Add-Content -Path $logFile -Value "node_modules exists: $(Test-Path 'node_modules')" -Encoding UTF8
if (Test-Path 'pnpm-lock.yaml') {
    $lines = (Get-Content 'pnpm-lock.yaml' | Measure-Object -Line).Lines
    Add-Content -Path $logFile -Value "pnpm-lock.yaml line count: $lines" -Encoding UTF8
}
Add-Content -Path $logFile -Value "=== $(Get-Date) Done ===" -Encoding UTF8
'@
$bytes = [System.Text.Encoding]::Unicode.GetBytes($command)
$encodedCommand = [Convert]::ToBase64String($bytes)
Write-Output $encodedCommand
