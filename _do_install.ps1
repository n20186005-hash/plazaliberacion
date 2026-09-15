$ErrorActionPreference = "Continue"
Set-Location "h:\GitHub\plazaliberacion"

Write-Output "=== Step 1: Check .npmrc ===" | Out-File -FilePath "result.log" -Encoding UTF8
Get-Content ".npmrc" | Out-File -FilePath "result.log" -Encoding UTF8 -Append

Write-Output "`n=== Step 2: Running pnpm install ===" | Out-File -FilePath "result.log" -Encoding UTF8 -Append
$pnpmPath = "C:\Users\dcc\AppData\Roaming\npm\pnpm.cmd"
& $pnpmPath install --no-frozen-lockfile --config.safe-save=false 2>&1 | Out-File -FilePath "result.log" -Encoding UTF8 -Append

Write-Output "`n=== Step 3: Verify results ===" | Out-File -FilePath "result.log" -Encoding UTF8 -Append

$lockExists = Test-Path "pnpm-lock.yaml"
$nmExists = Test-Path "node_modules"

Write-Output "pnpm-lock.yaml exists: $lockExists" | Out-File -FilePath "result.log" -Encoding UTF8 -Append
Write-Output "node_modules exists: $nmExists" | Out-File -FilePath "result.log" -Encoding UTF8 -Append

if ($lockExists) {
    $lines = (Get-Content "pnpm-lock.yaml" | Measure-Object -Line).Lines
    Write-Output "pnpm-lock.yaml line count: $lines" | Out-File -FilePath "result.log" -Encoding UTF8 -Append
}
