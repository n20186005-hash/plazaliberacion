const fs = require('node:fs');
const path = require('node:path');

const srcLock = 'h:\\GitHub\\plazalaserena\\pnpm-lock.yaml';
const dstLock = 'h:\\GitHub\\plazaliberacion\\pnpm-lock.yaml';

function emit(tag, val) {
  process.stdout.write('__X__[' + tag + ']' + (val !== undefined ? String(val) : '') + '__\n');
}

emit('SRC_EXISTS', fs.existsSync(srcLock));
if (!fs.existsSync(srcLock)) { process.exit(1); }

let content = fs.readFileSync(srcLock, 'utf8');
emit('SRC_LINES', content.split(/\r?\n/).length);
emit('SRC_SIZE', content.length);

content = content.replace(/typescript@5\.9\.3/g, 'typescript@6.0.3');
content = content.replace(/specifier: 5\.9\.3/g, 'specifier: 6.0.3');
content = content.replace(/version: 5\.9\.3/g, 'version: 6.0.3');
content = content.replace(/tailwindcss@4\.1\.13/g, 'tailwindcss@4.3.3');
content = content.replace(/@tailwindcss\/vite@4\.1\.13/g, '@tailwindcss/vite@4.3.3');
content = content.replace(/specifier: 4\.1\.13/g, 'specifier: 4.3.3');
content = content.replace(/version: 4\.1\.13/g, 'version: 4.3.3');

const oldWranglerBlock = /\n      wrangler:\n        specifier: 4\.131\.2\n        version: 4\.131\.2\(@types\/node@[0-9.]+\)\n/g;
content = content.replace(oldWranglerBlock, '\n');

const newImp = `importers:

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

packages:
`;

const impIdx = content.indexOf('importers:');
const pkgIdx = content.indexOf('\npackages:\n');
if (impIdx >= 0 && pkgIdx >= 0) {
  content = content.substring(0, impIdx) + newImp + content.substring(pkgIdx + '\npackages:\n'.length);
}

content = content.replace(/wrangler@[0-9.]+\(@types\/node@[0-9.]+\)/g, '');
content = content.replace(/, wrangler: '[^']+'/g, '');
content = content.replace(/\n  'wrangler@[^\n]+\n    resolution: \{integrity: [^}]+\}\n    engines: \{node: [^}]+\}\n    hasBin: true\n    peerDependencies:\n      workerd:[^\n]*\n      '@cloudflare\/workers-types':[^\n]*\n    peerDependenciesMeta:\n      workerd:\n        optional: true\n      '@cloudflare\/workers-types':\n        optional: true\n/g, '\nEMPTY_LINE\n');

content = content.replace(/EMPTY_LINE\n/g, '');
content = content.replace(/wrangler:[^\n]*\n/g, '');

emit('DST_LINES', content.split(/\r?\n/).length);
emit('DST_SIZE', content.length);
emit('DST_HEAD', content.substring(0, 300));

const b64 = Buffer.from(content, 'utf8').toString('base64');
emit('B64_LEN', b64.length);
const CHUNK = 3000;
const chunks = Math.ceil(b64.length / CHUNK);
emit('B64_CHUNKS', chunks);
for (let i = 0; i < chunks; i++) {
  const start = i * CHUNK;
  emit('B64_' + String(i).padStart(4, '0'), b64.substring(start, start + CHUNK));
}
emit('B64_DONE', chunks);

try {
  fs.writeFileSync(dstLock, content, 'utf8');
  emit('WRITE_OK', 'YES');
} catch(e) {
  emit('WRITE_ERR', e.message);
}
emit('VERIFY_EXISTS', fs.existsSync(dstLock));
