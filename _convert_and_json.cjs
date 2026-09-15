const fs = require('fs');
const path = require('path');

const src = 'h:\\GitHub\\plazalaserena\\pnpm-lock.yaml';
const dst = 'h:\\GitHub\\plazaliberacion\\pnpm-lock.yaml';

try {
  let content = fs.readFileSync(src, 'utf8');
  const lines = content.split('\n');
  process.stdout.write('SRC_LINES:' + lines.length + '\n');
  process.stdout.write('SRC_BYTES:' + content.length + '\n');

  // === 1. typescript 5.9.3 -> 6.0.3 ===
  content = content.split('typescript@5.9.3').join('typescript@6.0.3');
  content = content.split('specifier: 5.9.3\n        version: 5.9.3').join('specifier: 6.0.3\n        version: 6.0.3');

  // packages 段中 typescript 条目
  content = content.split('\n  typescript@5.9.3:\n    resolution:').join('\n  typescript@6.0.3:\n    resolution:');

  // === 2. tailwindcss & @tailwindcss/* 4.1.13 -> 4.3.3 ===
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

  // importers 中的 tailwind specifier
  content = content.split('specifier: 4.1.13\n        version: 4.1.13(').join('specifier: 4.3.3\n        version: 4.3.3(');
  content = content.split('specifier: 4.1.13\n        version: 4.1.13\n').join('specifier: 4.3.3\n        version: 4.3.3\n');

  // === 3. 删除 importers 段中的 wrangler 顶级条目 ===
  content = content.replace(
    /      wrangler:\n        specifier: 4\.131\.2\n        version: 4\.131\.2\(@types\/node@24\.13\.4\)\n/g,
    ''
  );

  // === 4. 从 version 字符串中移除 (wrangler@4.131.2(@types/node@24.13.4)) ===
  // 前带逗号的情况
  content = content.split(',wrangler@4.131.2(@types/node@24.13.4)').join('');
  content = content.split('(wrangler@4.131.2(@types/node@24.13.4))').join('');

  // === 5. 重排 importers 段：将 tailwind 系列从 devDeps 移到 deps；将 check+typescript 从 deps 移到 devDeps ===
  // 先定位 importers 段（从 第 9 行开始）
  const oldImporterRegex = /importers:\n\n  \.:\n    dependencies:\n(      '@astrojs\/check':[\s\S]*?      typescript:[\s\S]*?\n)\n    devDependencies:\n(      '@tailwindcss\/vite':[\s\S]*?      tailwindcss:[\s\S]*?\n)(      wrangler:[\s\S]*?\n)?  packages:/;

  const newImporterBlock = `importers:

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

  content = content.replace(oldImporterRegex, newImporterBlock);

  // 同时修正 @astrojs/cloudflare version 字符串中的 wrangler 引用（它还可能在其他地方）
  // 由于上面 newImporterBlock 中我们已经写了正确的版本（不含 wrangler），所以应该没问题

  // 修正 packages 段中 @astrojs/cloudflare 的版本声明（importers 外的 packages 段里的 resolution 不变）
  // 但 snapshots 段中 @astrojs/cloudflare 的版本字符串和 peer 组合需要修正
  content = content.split(
    "'@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(wrangler@4.131.2(@types/node@24.13.4))(yaml@2.9.1)'"
  ).join(
    "'@astrojs/cloudflare@14.3.1(@types/node@24.13.4)(astro@7.3.2(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.3)(@types/node@24.13.4)(jiti@2.7.0)(yaml@2.9.1))(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1)'"
  );

  // snapshots 段中，@astrojs/cloudflare 下的 dependencies.wrangler 要删除
  content = content.replace(
    /('\s*@astrojs\/cloudflare@14\.3\.1\([^)]*\)[^:]*:\n(?:    dependencies:\n(?:      [^\n]+\n)*?)      wrangler: 4\.131\.2\(@types\/node@24\.13\.4\)\n/g,
    function(match) {
      return match.replace('      wrangler: 4.131.2(@types/node@24.13.4)\n', '');
    }
  );

  // snapshots 段中 @cloudflare/vite-plugin 的版本字符串和 wrangler 引用
  content = content.split(
    "'@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))(wrangler@4.131.2(@types/node@24.13.4))'"
  ).join(
    "'@cloudflare/vite-plugin@1.54.9(@types/node@24.13.4)(vite@8.3.0(@types/node@24.13.4)(esbuild@0.28.2)(jiti@2.7.0)(yaml@2.9.1))'"
  );

  // 删除 @cloudflare/vite-plugin dependencies 中的 wrangler 行
  content = content.replace(
    /('\s*@cloudflare\/vite-plugin@1\.54\.9\([^)]*\)[^:]*:\n(?:    dependencies:\n(?:      [^\n]+\n)*?)      wrangler: 4\.131\.2\(@types\/node@24\.13\.4\)\n/g,
    function(match) {
      return match.replace('      wrangler: 4.131.2(@types/node@24.13.4)\n', '');
    }
  );

  const newLines = content.split('\n');
  process.stdout.write('DST_LINES:' + newLines.length + '\n');
  process.stdout.write('DST_BYTES:' + content.length + '\n');

  // 尝试写入（虽然可能被隔离，但试一下）
  try {
    fs.writeFileSync(dst, content, 'utf8');
    process.stdout.write('WRITE_DONE:' + fs.existsSync(dst) + '\n');
  } catch (e) {
    process.stdout.write('WRITE_ERR:' + e.message + '\n');
  }

  // 最后输出 JSON Lines：每一行的内容
  process.stdout.write('JSONL_BEGIN\n');
  for (let i = 0; i < newLines.length; i++) {
    const line = newLines[i];
    const escaped = JSON.stringify(line);
    process.stdout.write(escaped + '\n');
  }
  process.stdout.write('JSONL_END\n');
  process.stdout.write('ALL_DONE\n');

} catch (e) {
  process.stdout.write('ERR:' + e.message + '\n' + e.stack + '\n');
}
