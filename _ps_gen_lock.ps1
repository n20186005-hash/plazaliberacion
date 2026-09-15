$ErrorActionPreference = "Continue"
Set-Location "h:\GitHub\plazaliberacion"

$lockFile = "h:\GitHub\plazaliberacion\pnpm-lock.yaml"
$nmDir = "h:\GitHub\plazaliberacion\node_modules"
$resultFile = "h:\GitHub\plazaliberacion\PS_GEN_LOCK.txt"

Write-Output "=== Step 0: Cleanup old files ===" | Out-File -FilePath $resultFile -Encoding UTF8
if (Test-Path $lockFile) {
    Remove-Item $lockFile -Force
    Write-Output "Deleted old pnpm-lock.yaml" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
}
if (Test-Path $nmDir) {
    Remove-Item $nmDir -Recurse -Force
    Write-Output "Deleted old node_modules" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
}

Write-Output "`n=== Step 1: Check .npmrc ===" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
Get-Content ".npmrc" | Out-File -FilePath $resultFile -Encoding UTF8 -Append

Write-Output "`n=== Step 2: Running pnpm install (lockfile-only) ===" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
$pnpmPath = "C:\Users\dcc\AppData\Roaming\npm\pnpm.cmd"
Write-Output "Command: & $pnpmPath install --no-frozen-lockfile --lockfile-only --config.safe-save=false --config.node-linker=hoisted --ignore-scripts" | Out-File -FilePath $resultFile -Encoding UTF8 -Append

$sw = [Diagnostics.Stopwatch]::StartNew()
try {
    & $pnpmPath install --no-frozen-lockfile --lockfile-only --config.safe-save=false --config.node-linker=hoisted --ignore-scripts 2>&1 | Out-File -FilePath $resultFile -Encoding UTF8 -Append
    $exitCode = $LASTEXITCODE
    Write-Output "`npnpm exit code: $exitCode" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
} catch {
    Write-Output "`nEXCEPTION: $($_.Exception.Message)" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
}
$sw.Stop()
Write-Output "Elapsed time: $($sw.Elapsed.TotalSeconds) seconds" | Out-File -FilePath $resultFile -Encoding UTF8 -Append

Write-Output "`n=== Step 3: Verify results ===" | Out-File -FilePath $resultFile -Encoding UTF8 -Append

$lockExists = Test-Path $lockFile
$nmExists = Test-Path $nmDir

Write-Output "pnpm-lock.yaml exists: $lockExists" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
Write-Output "node_modules exists: $nmExists" | Out-File -FilePath $resultFile -Encoding UTF8 -Append

if ($lockExists) {
    $lines = (Get-Content $lockFile | Measure-Object -Line).Lines
    $size = (Get-Item $lockFile).Length
    Write-Output "pnpm-lock.yaml line count: $lines" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
    Write-Output "pnpm-lock.yaml size: $size bytes" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
}

Write-Output "`n=== DONE ===" | Out-File -FilePath $resultFile -Encoding UTF8 -Append
Write-Output "Result file: $resultFile"
