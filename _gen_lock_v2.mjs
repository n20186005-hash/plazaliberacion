import { writeFileSync, existsSync, readFileSync, unlinkSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const cwd = resolve('h:/GitHub/plazaliberacion');
const outFile = resolve(cwd, 'pnpm_output_final.txt');

let log = '';
log += `Time: ${new Date().toISOString()}\n`;
log += `CWD: ${cwd}\n`;
log += `package.json: ${existsSync(resolve(cwd, 'package.json'))}\n`;
log += `.npmrc:\n${readFileSync(resolve(cwd, '.npmrc'), 'utf8')}\n`;

const lockPath = resolve(cwd, 'pnpm-lock.yaml');
const nmPath = resolve(cwd, 'node_modules');

log += `--- cleanup ---\n`;
if (existsSync(lockPath)) {
  try { unlinkSync(lockPath); log += `Deleted old pnpm-lock.yaml\n`; } catch (e) { log += `Delete lock error: ${e.message}\n`; }
}
if (existsSync(nmPath)) {
  try { rmSync(nmPath, { recursive: true, force: true }); log += `Deleted old node_modules\n`; } catch (e) { log += `Delete nm error: ${e.message}\n`; }
}

log += `---pnpm start---\n`;
log += `Args: install --no-frozen-lockfile --lockfile-only --config.safe-save=false --config.node-linker=hoisted\n`;

try {
  const stdout = execFileSync(
    'C:/Users/dcc/AppData/Roaming/npm/pnpm.cmd',
    ['install', '--no-frozen-lockfile', '--lockfile-only', '--config.safe-save=false', '--config.node-linker=hoisted'],
    { cwd, encoding: 'utf8', timeout: 600000, maxBuffer: 200 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] }
  );
  log += stdout;
  log += `\n---SUCCESS---\n`;
} catch (e) {
  log += `\nstdout:\n${e.stdout || ''}\nstderr:\n${e.stderr || ''}\nerror: ${e.message}\n`;
  log += `---FAILED (code ${e.status})---\n`;
}

log += `\n---post-check---\n`;
log += `pnpm-lock.yaml exists: ${existsSync(lockPath)}\n`;
log += `node_modules exists: ${existsSync(nmPath)}\n`;
if (existsSync(lockPath)) {
  const c = readFileSync(lockPath, 'utf8');
  log += `pnpm-lock.yaml lines: ${c.split(/\r?\n/).length}\n`;
  log += `pnpm-lock.yaml size: ${c.length} chars\n`;
}

writeFileSync(outFile, log, 'utf8');
console.log('DONE - output written to', outFile);
