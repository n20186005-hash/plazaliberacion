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
safeLog('===INSTALL_START===');

const result = spawnSync(
  'C:\\Users\\dcc\\AppData\\Roaming\\npm\\pnpm.cmd',
  ['install', '--no-frozen-lockfile', '--config.safe-save=false', '--reporter=append-only'],
  {
    cwd,
    encoding: 'utf8',
    timeout: 600000,
    maxBuffer: 50 * 1024 * 1024
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

safeLog('===POST_CHECK===');
const lockPath = path.join(cwd, 'pnpm-lock.yaml');
const nmPath = path.join(cwd, 'node_modules');
const lockExists = fs.existsSync(lockPath);
const nmExists = fs.existsSync(nmPath);

safeLog('LOCK_EXISTS: ' + lockExists);
safeLog('NM_EXISTS: ' + nmExists);

if (lockExists) {
  try {
    const content = fs.readFileSync(lockPath, 'utf8');
    const lines = content.split(/\r?\n/).length;
    safeLog('LOCK_LINES: ' + lines);
    safeLog('===LOCK_BASE64_START===');
    const b64 = Buffer.from(content, 'utf8').toString('base64');
    const chunkSize = 80;
    for (let i = 0; i < b64.length; i += chunkSize) {
      safeLog('B64:' + b64.substring(i, i + chunkSize));
    }
    safeLog('===LOCK_BASE64_END===');
  } catch (e) {
    safeLog('LOCK_READ_ERROR: ' + e.message);
  }
}

safeLog('===DONE===');
