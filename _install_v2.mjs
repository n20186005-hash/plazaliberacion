import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const cwd = resolve('h:/GitHub/plazaliberacion');
const outFile = resolve(cwd, 'pnpm_output_final.txt');

let log = '';
log += `Time: ${new Date().toISOString()}\n`;
log += `CWD: ${cwd}\n`;
log += `package.json: ${existsSync(resolve(cwd, 'package.json'))}\n`;
log += `.npmrc:\n${readFileSync(resolve(cwd, '.npmrc'), 'utf8')}\n`;
log += `---pnpm start---\n`;

try {
  const stdout = execFileSync(
    'C:/Users/dcc/AppData/Roaming/npm/pnpm.cmd',
    ['install', '--no-frozen-lockfile', '--config.safe-save=false'],
    { cwd, encoding: 'utf8', timeout: 600000, maxBuffer: 200 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] }
  );
  log += stdout;
  log += `\n---SUCCESS---\n`;
} catch (e) {
  log += `\nstdout:\n${e.stdout || ''}\nstderr:\n${e.stderr || ''}\nerror: ${e.message}\n`;
  log += `---FAILED (code ${e.status})---\n`;
}

log += `\n---post-check---\n`;
const lockPath = resolve(cwd, 'pnpm-lock.yaml');
const nmPath = resolve(cwd, 'node_modules');
log += `pnpm-lock.yaml exists: ${existsSync(lockPath)}\n`;
log += `node_modules exists: ${existsSync(nmPath)}\n`;
if (existsSync(lockPath)) {
  const c = readFileSync(lockPath, 'utf8');
  log += `pnpm-lock.yaml lines: ${c.split(/\r?\n/).length}\n`;
}

writeFileSync(outFile, log, 'utf8');
console.log('DONE');
