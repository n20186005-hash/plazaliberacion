Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'SilentlyContinue'
$files = @('favicon-16.png', 'favicon-32.png', 'favicon-180.png')
foreach ($name in $files) {
  $p = 'h:\GitHub\plazaliberacion\public\icons\' + $name
  if (Test-Path $p) {
    try {
      $img = [System.Drawing.Image]::FromFile($p)
      Write-Output "$name $($img.Width)x$($img.Height)"
      $img.Dispose()
    } catch {
      Write-Output "$name FAILED"
    }
  }
}