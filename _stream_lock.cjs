const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const cwd = 'h:\\GitHub\\plazaliberacion';
const pnpmCjs = 'C:\\Users\\dcc\\AppData\\Roaming\\npm\\node_modules\\pnpm\\bin\\pnpm.cjs';
const lockPath = path.join(cwd, 'pnpm-lock.yaml');

function emit(tag, data) {
  const safe = '===TRAE_' + tag + '===';
  process.stdout.write('\n' + safe + '\n');
  if (data !== undefined) {
    process.stdout.write(String(data) + '\n');
    process.stdout.write(safe + '\n');
  }
}

emit('START', new Date().toISOString());
emit('CWD', cwd);
emit('PNPM_EXISTS', fs.existsSync(pnpmCjs));
emit('PKG_EXISTS', fs.existsSync(path.join(cwd, 'package.json')));

if (fs.existsSync(lockPath)) {
  try { fs.unlinkSync(lockPath); emit('OLD_LOCK_DELETED'); } catch(e) { emit('DELETE_ERR', e.message); }
}
const nmPath = path.join(cwd, 'node_modules');
if (fs.existsSync(nmPath)) {
  try { fs.rmSync(nmPath, {recursive:true,force:true}); emit('OLD_NM_DELETED'); } catch(e) { emit('DELETE_NM_ERR', e.message); }
}

const args = [
  pnpmCjs,
  'install',
  '--no-frozen-lockfile',
  '--lockfile-only',
  '--config.safe-save=false',
  '--config.node-linker=hoisted',
  '--ignore-scripts',
  '--reporter=append-only'
];

emit('CMD', 'node ' + args.join(' '));
let lockFound = false;

const pollInterval = setInterval(() => {
  if (fs.existsSync(lockPath)) {
    if (!lockFound) {
      lockFound = true;
      emit('LOCK_FOUND', 'YES');
      try {
        const stat = fs.statSync(lockPath);
        emit('LOCK_SIZE_BYTES', stat.size);
        const content = fs.readFileSync(lockPath, 'utf8');
        emit('LOCK_LINES_COUNT', content.split(/\r?\n/).length);
        const b64 = Buffer.from(content, 'utf8').toString('base64');
        emit('LOCK_BASE64_START');
        const CHUNK = 8000;
        for (let i = 0; i < b64.length; i += CHUNK) {
          process.stdout.write(b64.substring(i, i + CHUNK));
        }
        process.stdout.write('\n');
        emit('LOCK_BASE64_END');
        emit('LOCK_FIRST_200_CHARS', content.substring(0, 200));
      } catch(e) {
        emit('LOCK_READ_ERR', e.message);
      }
    }
  }
}, 3000);

const child = spawn(process.execPath, args, { cwd, env: process.env, timeout: 600000 });

child.stdout.on('data', (d) => {});
child.stderr.on('data', (d) => {});

child.on('close', (code) => {
  clearInterval(pollInterval);
  emit('PNPM_EXIT_CODE', code);
  emit('LOCK_EXISTS_AT_END', fs.existsSync(lockPath) ? 'YES' : 'NO');
  if (fs.existsSync(lockPath) && !lockFound) {
    try {
      const content = fs.readFileSync(lockPath, 'utf8');
      emit('LOCK_LINES_COUNT', content.split(/\r?\n/).length);
      const b64 = Buffer.from(content, 'utf8').toString('base64');
      emit('LOCK_BASE64_START');
      const CHUNK = 8000;
      for (let i = 0; i < b64.length; i += CHUNK) {
        process.stdout.write(b64.substring(i, i + CHUNK));
      }
      process.stdout.write('\n');
      emit('LOCK_BASE64_END');
    } catch(e) {
      emit('LOCK_READ_ERR_2', e.message);
    }
  }
  emit('END', new Date().toISOString());
  setTimeout(() => process.exit(0), 1000);
});

child.on('error', (err) => {
  clearInterval(pollInterval);
  emit('SPAWN_ERROR', err.message);
});
