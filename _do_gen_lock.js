const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

function safeLog(msg) {
  const safe = String(msg).replace(/[^\x20-\x7E]/g, '?');
  process.stdout.write(safe + '\n');
}

const cwd = 'h:\\GitHub\\plazaliberacion';

safeLog('===PRECHECK===');
safeLog('CWD: ' + cwd);
safeLog('PKG_EXISTS: ' + fs.existsSync(path.join(cwd, 'package.json')));
safeLog('NPMRC_EXISTS: ' + fs.existsSync(path.join(cwd, '.npmrc')));

const lockPath = path.join(cwd, 'pnpm-lock.yaml');
const nmPath = path.join(cwd, 'node_modules');

if (fs.existsSync(lockPath)) {
  fs.unlinkSync(lockPath);
  safeLog('OLD_LOCK_DELETED');
}
if (fs.existsSync(nmPath)) {
  fs.rmSync(nmPath, { recursive: true, force: true });
  safeLog('OLD_NM_DELETED');
}

safeLog('===INSTALL_START===');

const args = [
  'install',
  '--no-frozen-lockfile',
  '--lockfile-only',
  '--config.safe-save=false',
  '--config.node-linker=hoisted',
  '--reporter=append-only'
];

safeLog('ARGS: ' + args.join(' '));

const result = spawnSync(
  'C:\\Users\\dcc\\AppData\\Roaming\\npm\\pnpm.cmd',
  args,
  {
    cwd,
    encoding: 'utf8',
    timeout: 600000,
    maxBuffer: 50 * 1024 * 1024,
    shell: true
  }
);

safeLog('===STDOUT_START===');
if (result.stdout) {
  const lines = result.stdout.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    safeLog('O' + i + ': ' + lines[i]);
  }
}
safeLog('===STDOUT_END===');

safeLog('===STDERR_START===');
if (result.stderr) {
  const lines = result.stderr.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    safeLog('E' + i + ': ' + lines[i]);
  }
}
safeLog('===STDERR_END===');
safeLog('EXIT_CODE: ' + result.status);
if (result.error) {
  safeLog('ERROR: ' + result.error.message);
}

safeLog('===POST_CHECK===');
const lockExists = fs.existsSync(lockPath);
safeLog('LOCK_EXISTS: ' + lockExists);

if (lockExists) {
  try {
    const stat = fs.statSync(lockPath);
    safeLog('LOCK_SIZE: ' + stat.size + ' bytes');
    const content = fs.readFileSync(lockPath, 'utf8');
    const lines = content.split(/\r?\n/).length;
    safeLog('LOCK_LINES: ' + lines);
  } catch (e) {
    safeLog('LOCK_READ_ERROR: ' + e.message);
  }
}

safeLog('===DONE===');
