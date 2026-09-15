import { writeFileSync, existsSync, readFileSync, unlinkSync, rmSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const cwd = resolve('h:/GitHub/plazaliberacion');
const resultFile = resolve(cwd, 'FINAL_GEN_RESULT.txt');
const pnpmCjs = 'C:/Users/dcc/AppData/Roaming/npm/node_modules/pnpm/bin/pnpm.cjs';
const lockPath = resolve(cwd, 'pnpm-lock.yaml');
const nmPath = resolve(cwd, 'node_modules');

let log = '';
function add(msg) {
  log += msg + '\n';
  process.stdout.write(msg + '\n');
}

add('=== START: ' + new Date().toISOString());
add('CWD: ' + cwd);
add('pnpm.cjs exists: ' + existsSync(pnpmCjs));
add('package.json exists: ' + existsSync(resolve(cwd, 'package.json')));

add('\n--- CLEANUP ---');
if (existsSync(lockPath)) { try { unlinkSync(lockPath); add('Deleted old pnpm-lock.yaml'); } catch(e) { add('Delete lock err: ' + e.message); } }
if (existsSync(nmPath)) { try { rmSync(nmPath, { recursive: true, force: true }); add('Deleted old node_modules'); } catch(e) { add('Delete nm err: ' + e.message); } }

const args = [
  pnpmCjs,
  'install',
  '--no-frozen-lockfile',
  '--lockfile-only',
  '--config.safe-save=false',
  '--config.node-linker=hoisted',
  '--ignore-scripts',
  '--config.side-effects-cache=false',
  '--reporter=append-only'
];

add('\n--- RUNNING: node ' + args.join(' '));

const env = {
  ...process.env,
  CI: 'true',
  PNPM_LOG_LEVEL: 'warn',
};

const child = spawn(process.execPath, args, { cwd, env, timeout: 600000 });
let stdout = '';
let stderr = '';

child.stdout.on('data', (d) => { stdout += d.toString(); });
child.stderr.on('data', (d) => { stderr += d.toString(); });

child.on('close', (code) => {
  add('\n--- EXIT CODE: ' + code);
  if (stdout.trim()) { add('STDOUT:\n' + stdout); }
  if (stderr.trim()) { add('STDERR:\n' + stderr); }

  add('\n--- POST CHECK ---');
  add('pnpm-lock.yaml exists: ' + existsSync(lockPath));
  add('node_modules exists: ' + existsSync(nmPath));

  if (existsSync(lockPath)) {
    const content = readFileSync(lockPath, 'utf8');
    const lines = content.split(/\r?\n/).length;
    add('pnpm-lock.yaml lines: ' + lines);
    add('pnpm-lock.yaml size: ' + content.length + ' chars');
  }

  writeFileSync(resultFile, log, 'utf8');
  add('\nResult written to: ' + resultFile);
  add('=== END: ' + new Date().toISOString());
});

child.on('error', (err) => {
  add('SPAWN ERROR: ' + err.message);
  writeFileSync(resultFile, log, 'utf8');
});
