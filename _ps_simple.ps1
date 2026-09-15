$ErrorActionPreference = 'Continue'
Set-Location 'h:\GitHub\plazaliberacion'

$testFile = 'h:\GitHub\plazaliberacion\PS_TEST1.txt'
$lockFile = 'h:\GitHub\plazaliberacion\pnpm-lock.yaml'
$nmDir = 'h:\GitHub\plazaliberacion\node_modules'

'=== Test 1 at ' + (Get-Date) + ' ===' | Out-File -FilePath $testFile -Encoding UTF8
'CWD: ' + (Get-Location) | Out-File -FilePath $testFile -Encoding UTF8 -Append
'User: ' + $env:USERNAME | Out-File -FilePath $testFile -Encoding UTF8 -Append
'Temp dir: ' + $env:TEMP | Out-File -FilePath $testFile -Encoding UTF8 -Append

if (Test-Path $lockFile) {
    Remove-Item $lockFile -Force
    'Deleted old lockfile' | Out-File -FilePath $testFile -Encoding UTF8 -Append
}
if (Test-Path $nmDir) {
    Remove-Item $nmDir -Recurse -Force
    'Deleted old node_modules' | Out-File -FilePath $testFile -Encoding UTF8 -Append
}

$pnpmPath = 'C:\Users\dcc\AppData\Roaming\npm\pnpm.cmd'
'pnpm exists: ' + (Test-Path $pnpmPath) | Out-File -FilePath $testFile -Encoding UTF8 -Append
'package.json exists: ' + (Test-Path 'package.json') | Out-File -FilePath $testFile -Encoding UTF8 -Append

'=== Running pnpm install ===' | Out-File -FilePath $testFile -Encoding UTF8 -Append
& $pnpmPath install --no-frozen-lockfile --config.safe-save=false --ignore-scripts --reporter=append-only 2>&1 | Out-File -FilePath $testFile -Encoding UTF8 -Append
'pnpm exit code: ' + $LASTEXITCODE | Out-File -FilePath $testFile -Encoding UTF8 -Append

'=== Post check ===' | Out-File -FilePath $testFile -Encoding UTF8 -Append
'lockfile exists: ' + (Test-Path $lockFile) | Out-File -FilePath $testFile -Encoding UTF8 -Append
'nm exists: ' + (Test-Path $nmDir) | Out-File -FilePath $testFile -Encoding UTF8 -Append

if (Test-Path $lockFile) {
    $lines = (Get-Content $lockFile | Measure-Object -Line).Lines
    'lockfile lines: ' + $lines | Out-File -FilePath $testFile -Encoding UTF8 -Append
    $size = (Get-Item $lockFile).Length
    'lockfile size: ' + $size + ' bytes' | Out-File -FilePath $testFile -Encoding UTF8 -Append
    '=== lockfile first 10 lines ===' | Out-File -FilePath $testFile -Encoding UTF8 -Append
    Get-Content $lockFile -TotalCount 10 | Out-File -FilePath $testFile -Encoding UTF8 -Append
}

'=== Done at ' + (Get-Date) + ' ===' | Out-File -FilePath $testFile -Encoding UTF8 -Append
