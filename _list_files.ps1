$ErrorActionPreference = 'SilentlyContinue'
Set-Location 'h:/GitHub/plazaliberacion'
$files = Get-ChildItem -Path . -Recurse -Force -File | Where-Object { $_.FullName -notmatch 'node_modules|\\.git|pnpm-lock' }
foreach ($f in $files) { Write-Output $f.FullName }