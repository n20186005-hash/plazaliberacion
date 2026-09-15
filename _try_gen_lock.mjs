import { writeFileSync, existsSync, readFileSync, unlinkSync, rmSync, renameSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const cwd = resolve('h:/GitHub/plazaliberacion');
const outFile = resolve(cwd, 'TRY_GEN_LOCK.txt');
const lockPath = resolve(cwd, 'pnpm-lock.yaml');
const nmPath = resolve(cwd, 'node_modules');
const storePath = resolve(cwd, '.pnpm-store-temp');

let output = '';
function log(msg) {
  const line = `[${new Date().toISOString().slice(11, 19)}] ${msg}\n`;
  output += line;
  process.stdout.write(line);
}

log(`Starting in ${cwd}`);
log(`package.json exists: ${existsSync(resolve(cwd, 'package.json'))}`);

log('Cleanup old files...');
if (existsSync(lockPath)) { try { unlinkSync(lockPath); log('  - deleted old pnpm-lock.yaml'); } catch(e) { log(`  ! delete lock err: ${e.message}`); } }
if (existsSync(nmPath)) { try { rmSync(nmPath, { recursive: true, force: true }); log('  - deleted old node_modules'); } catch(e) { log(`  ! delete nm err: ${e.message}`); } }
if (existsSync(storePath)) { try { rmSync(storePath, { recursive: true, force: true }); log('  - deleted old .pnpm-store-temp'); } catch(e) { log(`  ! delete store err: ${e.message}`); } }

const pnpmArgs = [
  'install',
  '--no-frozen-lockfile',
  '--lockfile-only',
  '--ignore-scripts',
  '--config.safe-save=false',
  '--config.node-linker=hoisted',
  '--config.side-effects-cache=false',
  '--config.package-import-method=copy',
  '--config.prefer-symlinked-executables=false',
  '--config.use-lockfile-v6=false',
  '--reporter=append-only',
  `--store-dir=${storePath}`
];

log(`Running pnpm with args: ${pnpmArgs.join(' ')}`);

const child = spawn(
  'C:/Users/dcc/AppData/Roaming/npm/pnpm.cmd',
  pnpmArgs,
  {
    cwd,
    env: {
      ...process.env,
      CI: 'true',
      PNPM_LOG_LEVEL: 'warn',
    },
    timeout: 300000,
  }
);

let stdoutBuf = '';
let stderrBuf = '';

child.stdout.on('data', (d) => { stdoutBuf += d.toString(); });
child.stderr.on('data', (d) => { stderrBuf += d.toString(); });

child.on('error', (err) => {
  log(`SPAWN ERROR: ${err.message}`);
});

child.on('close', (code, signal) => {
  log(`pnpm exited: code=${code} signal=${signal}`);
  if (stdoutBuf.trim()) { log(`--- STDOUT ---\n${stdoutBuf}`); }
  if (stderrBuf.trim()) { log(`--- STDERR ---\n${stderrBuf}`); }

  log('Post-check:');
  log(`  pnpm-lock.yaml exists: ${existsSync(lockPath)}`);
  log(`  node_modules exists: ${existsSync(nmPath)}`);

  if (existsSync(lockPath)) {
    try {
      const content = readFileSync(lockPath, 'utf8');
      const lines = content.split(/\r?\n/).length;
      log(`  pnpm-lock.yaml lines: ${lines}`);
      log(`  pnpm-lock.yaml size: ${content.length} chars`);
      log(`  pnpm-lock.yaml first 500 chars:`);
      log(content.substring(0, 500));
    } catch(e) {
      log(`  ! read lock err: ${e.message}`);
    }
  }

  writeFileSync(outFile, output, 'utf8');
  log(`Result written to ${outFile}`);

  cleanupStore();
});

function cleanupStore() {
  try {
    if (existsSync(storePath)) rmSync(storePath, { recursive: true, force: true });
  } catch(e) {}
}

setTimeout(() => {
  log('TIMEOUT: 5 min reached, checking for partial lockfile...');
  try { child.kill('SIGTERM'); } catch(e) {}
  setTimeout(() => {
    log(`  After timeout - pnpm-lock.yaml exists: ${existsSync(lockPath)}`);
    writeFileSync(outFile, output, 'utf8');
    cleanupStore();
  }, 3000);
}, 300000);
