$src = 'h:\GitHub\plazalaserena\pnpm-lock.yaml'
$dst = 'h:\GitHub\plazaliberacion\pnpm-lock.yaml'

$content = [System.IO.File]::ReadAllText($src, [System.Text.Encoding]::UTF8)

$content = $content.Replace('typescript@5.9.3', 'typescript@6.0.3')
$content = $content.Replace('specifier: 5.9.3' + "`n" + '        version: 5.9.3', 'specifier: 6.0.3' + "`n" + '        version: 6.0.3')
$content = $content.Replace("`n  typescript@5.9.3:`n    resolution:", "`n  typescript@6.0.3:`n    resolution:")

$content = $content.Replace('tailwindcss@4.1.13', 'tailwindcss@4.3.3')
$content = $content.Replace('@tailwindcss/node@4.1.13', '@tailwindcss/node@4.3.3')
$content = $content.Replace('@tailwindcss/vite@4.1.13', '@tailwindcss/vite@4.3.3')
$content = $content.Replace('@tailwindcss/oxide@4.1.13', '@tailwindcss/oxide@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-android-arm64@4.1.13', '@tailwindcss/oxide-android-arm64@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-darwin-arm64@4.1.13', '@tailwindcss/oxide-darwin-arm64@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-darwin-x64@4.1.13', '@tailwindcss/oxide-darwin-x64@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-freebsd-x64@4.1.13', '@tailwindcss/oxide-freebsd-x64@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-linux-arm-gnueabihf@4.1.13', '@tailwindcss/oxide-linux-arm-gnueabihf@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-linux-arm64-gnu@4.1.13', '@tailwindcss/oxide-linux-arm64-gnu@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-linux-arm64-musl@4.1.13', '@tailwindcss/oxide-linux-arm64-musl@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-linux-x64-gnu@4.1.13', '@tailwindcss/oxide-linux-x64-gnu@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-linux-x64-musl@4.1.13', '@tailwindcss/oxide-linux-x64-musl@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-wasm32-wasi@4.1.13', '@tailwindcss/oxide-wasm32-wasi@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-win32-arm64-msvc@4.1.13', '@tailwindcss/oxide-win32-arm64-msvc@4.3.3')
$content = $content.Replace('@tailwindcss/oxide-win32-x64-msvc@4.1.13', '@tailwindcss/oxide-win32-x64-msvc@4.3.3')

$content = $content.Replace('specifier: 4.1.13' + "`n" + '        version: 4.1.13(', 'specifier: 4.3.3' + "`n" + '        version: 4.3.3(')
$content = $content.Replace('specifier: 4.1.13' + "`n" + '        version: 4.1.13' + "`n", 'specifier: 4.3.3' + "`n" + '        version: 4.3.3' + "`n")

$wranglerTop = '      wrangler:' + "`n" + '        specifier: 4.131.2' + "`n" + '        version: 4.131.2(@types/node@24.13.4)' + "`n"
$content = $content.Replace($wranglerTop, '')

$content = $content.Replace(',wrangler@4.131.2(@types/node@24.13.4)', '')
$content = $content.Replace('(wrangler@4.131.2(@types/node@24.13.4))', '')

$oldImp = "importers:`n`n  .:`n    dependencies:`n      '@astrojs/check':`n        specifier: 0.9.10`n        version: 0.9.10(prettier@3.9.6)(typescript@6.0.3)`n      '@astrojs/cloudflare':`n        specifier: 14.3.1`n        version: 14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)`n      '@astrojs/sitemap':`n        specifier: 3.7.4`n        version: 3.7.4`n      astro:`n        specifier: 7.3.2`n        version: 7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1)`n      typescript:`n        specifier: 6.0.3`n        version: 6.0.3`n    devDependencies:`n      '@tailwindcss/vite':`n        specifier: 4.3.3`n        version: 4.3.3(vite@7.3.6(@types/node@24.13.4)(jiti@2.7.0)(lightningcss@1.33.0)(yaml@2.9.1))`n      tailwindcss:`n        specifier: 4.3.3`n        version: 4.3.3`n`n  packages:"

$newImp = "importers:`n`n  .:`n    dependencies:`n      '@astrojs/cloudflare':`n        specifier: 14.3.1`n        version: 14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)`n      '@astrojs/sitemap':`n        specifier: 3.7.4`n        version: 3.7.4`n      '@tailwindcss/vite':`n        specifier: 4.3.3`n        version: 4.3.3(vite@7.3.6(@types/node@24.13.4)(jiti@2.7.0)(lightningcss@1.33.0)(yaml@2.9.1))`n      astro:`n        specifier: 7.3.2`n        version: 7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1)`n      tailwindcss:`n        specifier: 4.3.3`n        version: 4.3.3`n    devDependencies:`n      '@astrojs/check':`n        specifier: 0.9.10`n        version: 0.9.10(prettier@3.9.6)(typescript@6.0.3)`n      typescript:`n        specifier: 6.0.3`n        version: 6.0.3`n`n  packages:"

$content = $content.Replace($oldImp, $newImp)

$oldAF = "'@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(wrangler@4.131.2(@types/node@24.13.4))(yaml@2.9.1)'"
$newAF = "'@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)'"
$content = $content.Replace($oldAF, $newAF)

$oldCF = "'@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))(wrangler@4.131.2(@types/node@24.13.4))'"
$newCF = "'@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))'"
$content = $content.Replace($oldCF, $newCF)

function Remove-WranglerDep($text, $prefix) {
    $pattern = [regex]::Escape($prefix) + ":`n(?:    dependencies:`n(?:      [^`n]+`n)*?)      wrangler: 4\.131\.2\(@types/node@24\.13\.4\)`n"
    return [regex]::Replace($text, $pattern, {
        param($m) $m.Value -replace '      wrangler: 4\.131\.2\(@types/node@24\.13\.4\)\r?\n', ''
    }, 'Singleline')
}

# 直接用 Replace 删除固定的 snapshot 中的 wrangler 行
$content = $content.Replace("      wrangler: 4.131.2(@types/node@24.13.4)`n", '')

[System.IO.File]::WriteAllText($dst, $content, [System.Text.Encoding]::UTF8)

$bytes = [System.Text.Encoding]::UTF8.GetByteCount($content)
$lines = ($content -split "`n").Count
Write-Output "LINES=$lines BYTES=$bytes EXISTS=$([System.IO.File]::Exists($dst))"
