const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const cwd = 'h:\\GitHub\\plazaliberacion';

console.log('===PRECHECK===');
console.log('CWD:', cwd);
console.log('package.json exists:', fs.existsSync(path.join(cwd, 'package.json')));
console.log('.npmrc exists:', fs.existsSync(path.join(cwd, '.npmrc')));
console.log('===INSTALL START===');

const result = spawnSync(
  'C:\\Users\\dcc\\AppData\\Roaming\\npm\\pnpm.cmd',
  ['install', '--no-frozen-lockfile', '--config.safe-save=false'],
  {
    cwd,
    encoding: 'utf8',
    timeout: 600000,
    maxBuffer: 50 * 1024 * 1024,
    env: process.env
  }
);

console.log('STDOUT START');
console.log(result.stdout || '');
console.log('STDOUT END');
console.log('STDERR START');
console.log(result.stderr || '');
console.log('STDERR END');
console.log('EXIT CODE:', result.status);

console.log('===POST CHECK===');
const lockPath = path.join(cwd, 'pnpm-lock.yaml');
const nmPath = path.join(cwd, 'node_modules');
const lockExists = fs.existsSync(lockPath);
const nmExists = fs.existsSync(nmPath);

console.log('pnpm-lock.yaml exists:', lockExists);
console.log('node_modules exists:', nmExists);

if (lockExists) {
  const content = fs.readFileSync(lockPath, 'utf8');
  const lines = content.split(/\r?\n/).length;
  console.log('pnpm-lock.yaml line count:', lines);
  console.log('===LOCKFILE CONTENT START (BASE64)===');
  console.log(Buffer.from(content, 'utf8').toString('base64'));
  console.log('===LOCKFILE CONTENT END (BASE64)===');
}

console.log('===DONE===');
