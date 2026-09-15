const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const pnpmEntry = 'C:\\Users\\dcc\\AppData\\Roaming\\npm\\node_modules\\pnpm\\bin\\pnpm.cjs';
const lockPath = path.join(cwd, 'pnpm-lock.yaml');

const nodeExe = process.execPath;

const r = spawnSync(nodeExe, [
  pnpmEntry,
  'install',
  '--no-frozen-lockfile',
  '--lockfile-only',
  '--config.safe-save=false',
  '--config.node-linker=hoisted'
], {
  cwd: cwd,
  encoding: 'buffer',
  timeout: 600000,
  stdio: ['ignore', 'pipe', 'pipe'],
  maxBuffer: 50 * 1024 * 1024
});

process.stdout.write('PNPM_EXIT:' + (r.status ?? r.error?.code ?? 'null') + '\n');

if (r.stdout) process.stdout.write('STDOUT_LEN:' + r.stdout.length + '\n');
if (r.stderr) process.stdout.write('STDERR_LEN:' + r.stderr.length + '\n');

if (fs.existsSync(lockPath)) {
  const buf = fs.readFileSync(lockPath);
  process.stdout.write('LOCK_LEN:' + buf.length + '\n');
  process.stdout.write('LOCK_LINES:' + buf.toString('utf8').split('\n').length + '\n');
  process.stdout.write('BASE64_BEGIN\n');
  process.stdout.write(buf.toString('base64'));
  process.stdout.write('\nBASE64_END\n');
} else {
  process.stdout.write('LOCK_MISSING\n');
  if (r.stderr) {
    process.stdout.write('STDERR_PREVIEW:\n');
    try { process.stdout.write(r.stderr.slice(0, 5000).toString('utf8')); } catch(e){}
  }
}
