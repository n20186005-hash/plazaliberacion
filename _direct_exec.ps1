$ErrorActionPreference = 'Continue'
Set-Location 'h:\GitHub\plazaliberacion'

$pnpmPath = 'C:\Users\dcc\AppData\Roaming\npm\pnpm.cmd'

$env:PNPM_CONFIG_SAFE_SAVE = 'false'
$env:PNPM_CONFIG_NODE_LINKER = 'hoisted'
$env:PNPM_LOG_LEVEL = 'warn'
$env:CI = 'true'

Write-Host "=== START ==="
Write-Host "CWD: $(Get-Location)"
Write-Host "package.json: $(Test-Path 'package.json')"
Write-Host "pnpm.cmd exists: $(Test-Path $pnpmPath)"
Write-Host "Current lock placeholder exists: $(Test-Path 'pnpm-lock.yaml')"

Write-Host "`n=== Running pnpm install (no lockfile-only, ignore-scripts) ==="
& $pnpmPath install --no-frozen-lockfile --config.safe-save=false --config.node-linker=hoisted --ignore-scripts --reporter=append-only --config.package-import-method=copy --config.prefer-symlinked-executables=false
$exitCode = $LASTEXITCODE
Write-Host "`npnpm exit code: $exitCode"

Write-Host "`n=== Post check ==="
if (Test-Path 'pnpm-lock.yaml') {
    $f = Get-Item 'pnpm-lock.yaml'
    Write-Host "[OK] pnpm-lock.yaml exists! Size: $($f.Length) bytes"
    $lines = (Get-Content 'pnpm-lock.yaml' | Measure-Object -Line).Lines
    Write-Host "[OK] pnpm-lock.yaml line count: $lines"
    Write-Host "[FIRST_500]:"
    Get-Content 'pnpm-lock.yaml' -TotalCount 20
} else {
    Write-Host "[FAIL] pnpm-lock.yaml NOT created"
}
Write-Host "`n=== DONE ==="
