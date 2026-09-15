const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '..', 'plazalaserena', 'pnpm-lock.yaml');
const content = fs.readFileSync(templatePath, 'utf8');
const lines = content.split('\n');

let result = content;

console.log('INFO: Template lines:', lines.length);
console.log('INFO: Template length:', content.length);

console.log('BEFORE_replace_tailwind_count:', (content.match(/4\.1\.13/g) || []).length);
console.log('BEFORE_replace_ts_count:', (content.match(/5\.9\.3/g) || []).length);
console.log('BEFORE_wrangler_importer_count:', (content.match(/wrangler:\s*\n\s*specifier: 4\.131\.2/g) || []).length);

const globalReplacements = [
  ['typescript@5.9.3', 'typescript@6.0.3'],
  ['@tailwindcss/node@4.1.13', '@tailwindcss/node@4.3.3'],
  ['@tailwindcss/oxide-android-arm64@4.1.13', '@tailwindcss/oxide-android-arm64@4.3.3'],
  ['@tailwindcss/oxide-darwin-arm64@4.1.13', '@tailwindcss/oxide-darwin-arm64@4.3.3'],
  ['@tailwindcss/oxide-darwin-x64@4.1.13', '@tailwindcss/oxide-darwin-x64@4.3.3'],
  ['@tailwindcss/oxide-freebsd-x64@4.1.13', '@tailwindcss/oxide-freebsd-x64@4.3.3'],
  ['@tailwindcss/oxide-linux-arm-gnueabihf@4.1.13', '@tailwindcss/oxide-linux-arm-gnueabihf@4.3.3'],
  ['@tailwindcss/oxide-linux-arm64-gnu@4.1.13', '@tailwindcss/oxide-linux-arm64-gnu@4.3.3'],
  ['@tailwindcss/oxide-linux-arm64-musl@4.1.13', '@tailwindcss/oxide-linux-arm64-musl@4.3.3'],
  ['@tailwindcss/oxide-linux-x64-gnu@4.1.13', '@tailwindcss/oxide-linux-x64-gnu@4.3.3'],
  ['@tailwindcss/oxide-linux-x64-musl@4.1.13', '@tailwindcss/oxide-linux-x64-musl@4.3.3'],
  ['@tailwindcss/oxide-wasm32-wasi@4.1.13', '@tailwindcss/oxide-wasm32-wasi@4.3.3'],
  ['@tailwindcss/oxide-win32-arm64-msvc@4.1.13', '@tailwindcss/oxide-win32-arm64-msvc@4.3.3'],
  ['@tailwindcss/oxide-win32-x64-msvc@4.1.13', '@tailwindcss/oxide-win32-x64-msvc@4.3.3'],
  ['@tailwindcss/oxide@4.1.13', '@tailwindcss/oxide@4.3.3'],
  ['@tailwindcss/vite@4.1.13', '@tailwindcss/vite@4.3.3'],
  ['tailwindcss@4.1.13', 'tailwindcss@4.3.3'],
];

for (const [from, to] of globalReplacements) {
  result = result.split(from).join(to);
}

console.log('AFTER_GLOBAL_433_count:', (result.match(/4\.3\.3/g) || []).length);
console.log('AFTER_GLOBAL_603_count:', (result.match(/typescript@6\.0\.3/g) || []).length);

const importersStart = result.indexOf('importers:');
const packagesStart = result.indexOf('\npackages:');
const oldImporters = result.slice(importersStart, packagesStart);

const newImporters = `importers:

  .:
    dependencies:
      '@astrojs/cloudflare':
        specifier: 14.3.1
        version: 14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)
      '@astrojs/sitemap':
        specifier: 3.7.4
        version: 3.7.4
      '@tailwindcss/vite':
        specifier: 4.3.3
        version: 4.3.3(vite@7.3.6(@types/node@24.13.4)(jiti@2.7.0)(lightningcss@1.33.0)(yaml@2.9.1))
      astro:
        specifier: 7.3.2
        version: 7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1)
      tailwindcss:
        specifier: 4.3.3
        version: 4.3.3
    devDependencies:
      '@astrojs/check':
        specifier: 0.9.10
        version: 0.9.10(prettier@3.9.6)(typescript@6.0.3)
      typescript:
        specifier: 6.0.3
        version: 6.0.3

`;

result = result.slice(0, importersStart) + newImporters + result.slice(packagesStart);

console.log('AFTER_IMPORTERS_ok:', result.includes('devDependencies:') && result.includes("'@astrojs/check':") && result.includes("typescript@6.0.3"));

const astroCloudflareSnapshotOld = `  '@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(wrangler@4.131.2(@types/node@24.13.4))(yaml@2.9.1)':`;
const astroCloudflareSnapshotNew = `  '@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)':`;
if (result.includes(astroCloudflareSnapshotOld)) {
  result = result.split(astroCloudflareSnapshotOld).join(astroCloudflareSnapshotNew);
  console.log('FIXED_astroCloudflareSnapshot_title');
}

const cloudflareViteSnapshotOld = `  '@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))(wrangler@4.131.2(@types/node@24.13.4))':`;
const cloudflareViteSnapshotNew = `  '@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))':`;
if (result.includes(cloudflareViteSnapshotOld)) {
  result = result.split(cloudflareViteSnapshotOld).join(cloudflareViteSnapshotNew);
  console.log('FIXED_cloudflareViteSnapshot_title');
}

result = result.split('      wrangler: 4.131.2(@types/node@24.13.4)\n').join('');

const finalLines = result.split('\n');
console.log('FINAL_lines:', finalLines.length);
console.log('FINAL_length:', result.length);
console.log('FINAL_first_line:', finalLines[0]);
console.log('FINAL_last_line:', finalLines[finalLines.length - 1]);

try {
  fs.writeFileSync(path.join(__dirname, 'pnpm-lock.yaml'), result, 'utf8');
  console.log('WRITE_SUCCESS_sandbox_path');
} catch (e) {
  console.log('WRITE_ERROR:', e.message);
}

console.log('CHECKSUM_SIMPLE:', [...result].reduce((a,c)=>((a<<5)-a+c.charCodeAt(0))|0, 0));
