$ErrorActionPreference = 'SilentlyContinue'
$files = @('favicon-16.png', 'favicon-32.png', 'favicon-180.png')
foreach ($name in $files) {
  $p = 'h:\GitHub\plazaliberacion\public\icons\' + $name
  if (Test-Path $p) {
    $bytes = [System.IO.File]::ReadAllBytes($p)
    $header = ($bytes[0..7] | ForEach-Object { $_.ToString('X2') }) -join ' '
    $len = $bytes.Length
    Write-Output "$name ($len bytes) header=$header"
  } else {
    Write-Output "$name MISSING"
  }
}