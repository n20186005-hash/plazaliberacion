const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const cwd = 'h:\\GitHub\\plazaliberacion';
const lockPath = path.join(cwd, 'pnpm-lock.yaml');
const nmPath = path.join(cwd, 'node_modules');

function emit(tag, val) {
  const safeVal = val === undefined ? '' : String(val);
  process.stdout.write('__TRAE[' + tag + ']__' + safeVal + '__END__\n');
}

emit('STEP', 'CLEANUP');
if (fs.existsSync(lockPath)) { try { fs.unlinkSync(lockPath); emit('CLEANUP', 'LOCK_DELETED'); } catch(e) { emit('CLEANUP_ERR', e.message); } }
if (fs.existsSync(nmPath)) { try { fs.rmSync(nmPath, {recursive:true,force:true}); emit('CLEANUP', 'NM_DELETED'); } catch(e) { emit('CLEANUP_ERR2', e.message); } }

emit('PKG_EXISTS', fs.existsSync(path.join(cwd, 'package.json')));
emit('NPMRC_EXISTS', fs.existsSync(path.join(cwd, '.npmrc')));

emit('STEP', 'RUN_PNPM');
const args = [
  'install',
  '--no-frozen-lockfile',
  '--lockfile-only',
  '--config.safe-save=false',
  '--config.node-linker=hoisted',
  '--ignore-scripts',
  '--reporter=append-only'
];
emit('ARGS', args.join(' '));

const result = spawnSync(
  'C:\\Users\\dcc\\AppData\\Roaming\\npm\\pnpm.cmd',
  args,
  {
    cwd,
    encoding: 'utf8',
    timeout: 600000,
    maxBuffer: 50 * 1024 * 1024,
    env: { ...process.env, CI: 'true', PNPM_LOG_LEVEL: 'error' }
  }
);

emit('EXIT_CODE', result.status == null ? 'NULL' : result.status);
if (result.error) emit('SPAWN_ERR', result.error.message);
emit('STDOUT_LEN', result.stdout ? result.stdout.length : 0);
emit('STDERR_LEN', result.stderr ? result.stderr.length : 0);

emit('STEP', 'POST_CHECK');
const lockExists = fs.existsSync(lockPath);
emit('LOCK_EXISTS', lockExists ? 'YES' : 'NO');
emit('NM_EXISTS', fs.existsSync(nmPath) ? 'YES' : 'NO');

if (lockExists) {
  try {
    const stat = fs.statSync(lockPath);
    emit('LOCK_SIZE_BYTES', stat.size);
    const content = fs.readFileSync(lockPath, 'utf8');
    const lines = content.split(/\r?\n/).length;
    emit('LOCK_LINES', lines);
    emit('LOCK_HEAD_200', content.substring(0, 200));
    emit('LOCK_TAIL_200', content.substring(Math.max(0, content.length - 200)));
    const b64 = Buffer.from(content, 'utf8').toString('base64');
    emit('LOCK_B64_LEN', b64.length);
    const chunk = 4000;
    let idx = 0;
    for (let i = 0; i < b64.length; i += chunk) {
      emit('B64_' + String(idx).padStart(5, '0'), b64.substring(i, i + chunk));
      idx++;
    }
    emit('B64_CHUNKS', idx);
  } catch (e) {
    emit('LOCK_READ_ERR', e.message);
  }
}

emit('STEP', 'DONE');
