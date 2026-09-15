const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const cwd = 'h:\\GitHub\\plazaliberacion';
const pnpmCmd = 'C:\\Users\\dcc\\AppData\\Roaming\\npm\\pnpm.cmd';
const lockPath = path.join(cwd, 'pnpm-lock.yaml');

console.log('===START_GEN_LOCK===');
console.log('[1] Running pnpm install --lockfile-only...');

const result = spawnSync(pnpmCmd, [
  'install',
  '--no-frozen-lockfile',
  '--lockfile-only',
  '--config.safe-save=false',
  '--config.node-linker=hoisted'
], {
  cwd: cwd,
  encoding: 'utf8',
  timeout: 300000,
  shell: true,
  env: process.env
});

console.log('[2] pnpm exit code:', result.status);
if (result.error) console.log('[2E] pnpm error:', result.error.message);
if (result.stderr) console.log('[2E] stderr:', result.stderr.slice(0, 2000));
if (result.stdout) console.log('[2O] stdout:', result.stdout.slice(0, 2000));

console.log('[3] Checking lockfile exists:', fs.existsSync(lockPath));

if (fs.existsSync(lockPath)) {
  const content = fs.readFileSync(lockPath, 'utf8');
  console.log('[4] Lockfile size:', content.length, 'bytes');
  console.log('[4] Lockfile lines:', content.split('\n').length);
  const b64 = Buffer.from(content, 'utf8').toString('base64');
  console.log('===LOCKFILE_BASE64_START===');
  console.log(b64);
  console.log('===LOCKFILE_BASE64_END===');
} else {
  console.log('[ERR] Lockfile not generated!');
}

console.log('===END_GEN_LOCK===');
