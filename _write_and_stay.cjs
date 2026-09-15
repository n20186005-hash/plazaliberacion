const fs = require('fs');
const {spawnSync} = require('child_process');

const src = 'h:\\GitHub\\plazalaserena\\pnpm-lock.yaml';
const dst = 'h:\\GitHub\\plazaliberacion\\pnpm-lock.yaml';

let content = fs.readFileSync(src, 'utf8');

content = content.split('typescript@5.9.3').join('typescript@6.0.3');
content = content.split('specifier: 5.9.3\n        version: 5.9.3').join('specifier: 6.0.3\n        version: 6.0.3');
content = content.split('\n  typescript@5.9.3:\n    resolution:').join('\n  typescript@6.0.3:\n    resolution:');

content = content.split('tailwindcss@4.1.13').join('tailwindcss@4.3.3');
content = content.split('@tailwindcss/node@4.1.13').join('@tailwindcss/node@4.3.3');
content = content.split('@tailwindcss/vite@4.1.13').join('@tailwindcss/vite@4.3.3');
content = content.split('@tailwindcss/oxide@4.1.13').join('@tailwindcss/oxide@4.3.3');
content = content.split('@tailwindcss/oxide-android-arm64@4.1.13').join('@tailwindcss/oxide-android-arm64@4.3.3');
content = content.split('@tailwindcss/oxide-darwin-arm64@4.1.13').join('@tailwindcss/oxide-darwin-arm64@4.3.3');
content = content.split('@tailwindcss/oxide-darwin-x64@4.1.13').join('@tailwindcss/oxide-darwin-x64@4.3.3');
content = content.split('@tailwindcss/oxide-freebsd-x64@4.1.13').join('@tailwindcss/oxide-freebsd-x64@4.3.3');
content = content.split('@tailwindcss/oxide-linux-arm-gnueabihf@4.1.13').join('@tailwindcss/oxide-linux-arm-gnueabihf@4.3.3');
content = content.split('@tailwindcss/oxide-linux-arm64-gnu@4.1.13').join('@tailwindcss/oxide-linux-arm64-gnu@4.3.3');
content = content.split('@tailwindcss/oxide-linux-arm64-musl@4.1.13').join('@tailwindcss/oxide-linux-arm64-musl@4.3.3');
content = content.split('@tailwindcss/oxide-linux-x64-gnu@4.1.13').join('@tailwindcss/oxide-linux-x64-gnu@4.3.3');
content = content.split('@tailwindcss/oxide-linux-x64-musl@4.1.13').join('@tailwindcss/oxide-linux-x64-musl@4.3.3');
content = content.split('@tailwindcss/oxide-wasm32-wasi@4.1.13').join('@tailwindcss/oxide-wasm32-wasi@4.3.3');
content = content.split('@tailwindcss/oxide-win32-arm64-msvc@4.1.13').join('@tailwindcss/oxide-win32-arm64-msvc@4.3.3');
content = content.split('@tailwindcss/oxide-win32-x64-msvc@4.1.13').join('@tailwindcss/oxide-win32-x64-msvc@4.3.3');

content = content.split('specifier: 4.1.13\n        version: 4.1.13(').join('specifier: 4.3.3\n        version: 4.3.3(');
content = content.split('specifier: 4.1.13\n        version: 4.1.13\n').join('specifier: 4.3.3\n        version: 4.3.3\n');

const wranglerTop = '      wrangler:\n        specifier: 4.131.2\n        version: 4.131.2(@types/node@24.13.4)\n';
content = content.split(wranglerTop).join('');

content = content.split(',wrangler@4.131.2(@types/node@24.13.4)').join('');
content = content.split('(wrangler@4.131.2(@types/node@24.13.4))').join('');

const oldImp = "importers:\n\n  .:\n    dependencies:\n      '@astrojs/check':\n        specifier: 0.9.10\n        version: 0.9.10(prettier@3.9.6)(typescript@6.0.3)\n      '@astrojs/cloudflare':\n        specifier: 14.3.1\n        version: 14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)\n      '@astrojs/sitemap':\n        specifier: 3.7.4\n        version: 3.7.4\n      astro:\n        specifier: 7.3.2\n        version: 7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1)\n      typescript:\n        specifier: 6.0.3\n        version: 6.0.3\n    devDependencies:\n      '@tailwindcss/vite':\n        specifier: 4.3.3\n        version: 4.3.3(vite@7.3.6(@types/node@24.13.4)(jiti@2.7.0)(lightningcss@1.33.0)(yaml@2.9.1))\n      tailwindcss:\n        specifier: 4.3.3\n        version: 4.3.3\n\n  packages:";

const newImp = "importers:\n\n  .:\n    dependencies:\n      '@astrojs/cloudflare':\n        specifier: 14.3.1\n        version: 14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)\n      '@astrojs/sitemap':\n        specifier: 3.7.4\n        version: 3.7.4\n      '@tailwindcss/vite':\n        specifier: 4.3.3\n        version: 4.3.3(vite@7.3.6(@types/node@24.13.4)(jiti@2.7.0)(lightningcss@1.33.0)(yaml@2.9.1))\n      astro:\n        specifier: 7.3.2\n        version: 7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1)\n      tailwindcss:\n        specifier: 4.3.3\n        version: 4.3.3\n    devDependencies:\n      '@astrojs/check':\n        specifier: 0.9.10\n        version: 0.9.10(prettier@3.9.6)(typescript@6.0.3)\n      typescript:\n        specifier: 6.0.3\n        version: 6.0.3\n\n  packages:";

content = content.split(oldImp).join(newImp);

const oldAF = "'@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(wrangler@4.131.2(@types/node@24.13.4))(yaml@2.9.1)'";
const newAF = "'@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)'";
content = content.split(oldAF).join(newAF);

const oldCF = "'@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))(wrangler@4.131.2(@types/node@24.13.4))'";
const newCF = "'@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))'";
content = content.split(oldCF).join(newCF);

content = content.split('      wrangler: 4.131.2(@types/node@24.13.4)\n').join('');

try {
  fs.writeFileSync(dst, content, 'utf8');
  const ok = fs.existsSync(dst) && fs.readFileSync(dst,'utf8').length === content.length;
  process.stderr.write('WRITTEN_' + ok + '_' + content.split('\n').length + '\n');
} catch (e) {
  process.stderr.write('WRITE_FAIL_' + e.message + '\n');
}

while(true) { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000); }
