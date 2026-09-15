const http = require('http');
const fs = require('fs');

const src = 'h:\\GitHub\\plazalaserena\\pnpm-lock.yaml';
let content = fs.readFileSync(src, 'utf8');

// 替换逻辑（和之前完全一样）
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

content = content.replace(
  /      wrangler:\n        specifier: 4\.131\.2\n        version: 4\.131\.2\(@types\/node@24\.13\.4\)\n/g,
  ''
);
content = content.split(',wrangler@4.131.2(@types/node@24.13.4)').join('');
content = content.split('(wrangler@4.131.2(@types/node@24.13.4))').join('');

const oldImporter = `importers:

  .:
    dependencies:
      '@astrojs/check':
        specifier: 0.9.10
        version: 0.9.10(prettier@3.9.6)(typescript@6.0.3)
      '@astrojs/cloudflare':
        specifier: 14.3.1
        version: 14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)
      '@astrojs/sitemap':
        specifier: 3.7.4
        version: 3.7.4
      astro:
        specifier: 7.3.2
        version: 7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1)
      typescript:
        specifier: 6.0.3
        version: 6.0.3
    devDependencies:
      '@tailwindcss/vite':
        specifier: 4.3.3
        version: 4.3.3(vite@7.3.6(@types/node@24.13.4)(jiti@2.7.0)(lightningcss@1.33.0)(yaml@2.9.1))
      tailwindcss:
        specifier: 4.3.3
        version: 4.3.3

  packages:`;

const newImporter = `importers:

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

  packages:`;

content = content.split(oldImporter).join(newImporter);

content = content.split(
  "'@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(wrangler@4.131.2(@types/node@24.13.4))(yaml@2.9.1)'"
).join(
  "'@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)'"
);

content = content.split(
  "'@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))(wrangler@4.131.2(@types/node@24.13.4))'"
).join(
  "'@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))'"
);

content = content.replace(
  /('\s*@astrojs\/cloudflare@14\.3\.1\([^)]*\)[^:]*:\n(?:\s{4}dependencies:\n(?:\s{6}[^\n]+\n)*?)\s{6}wrangler: 4\.131\.2\(@types\/node@24\.13\.4\)\n/g,
  function(m) { return m.replace('      wrangler: 4.131.2(@types/node@24.13.4)\n', ''); }
);

content = content.replace(
  /('\s*@cloudflare\/vite-plugin@1\.54\.9\([^)]*\)[^:]*:\n(?:\s{4}dependencies:\n(?:\s{6}[^\n]+\n)*?)\s{6}wrangler: 4\.131\.2\(@types\/node@24\.13\.4\)\n/g,
  function(m) { return m.replace('      wrangler: 4.131.2(@types/node@24.13.4)\n', ''); }
);

const lines = content.split('\n');
const bytes = content.length;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Length': Buffer.byteLength(content, 'utf8'),
      'X-Lines': String(lines.length),
      'X-Bytes': String(bytes),
    });
    res.end(content);
  } else if (req.url === '/lines') {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(String(lines.length));
  } else if (req.url === '/bytes') {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(String(bytes));
  } else {
    res.writeHead(404); res.end('not found');
  }
});

const PORT = 18923;
server.listen(PORT, '127.0.0.1', () => {
  process.stderr.write('HTTP_READY_' + PORT + '_' + lines.length + '_' + bytes + '\n');
});

setTimeout(() => { server.close(); process.exit(0); }, 120000);
