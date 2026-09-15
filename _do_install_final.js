const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const cwd = 'h:\\GitHub\\plazaliberacion';
const resultFile = path.join(cwd, 'INSTALL_RESULT.txt');

let output = '';
output += `Working directory: ${cwd}\n`;
output += `package.json exists: ${fs.existsSync(path.join(cwd, 'package.json'))}\n`;
output += `.npmrc exists: ${fs.existsSync(path.join(cwd, '.npmrc'))}\n\n`;
output += `.npmrc contents:\n${fs.readFileSync(path.join(cwd, '.npmrc'), 'utf8')}\n\n`;
output += `=== Starting pnpm install ===\n`;

const result = spawnSync(
  'C:\\Users\\dcc\\AppData\\Roaming\\npm\\pnpm.cmd',
  ['install', '--no-frozen-lockfile', '--config.safe-save=false'],
  {
    cwd,
    encoding: 'utf8',
    timeout: 300000,
    maxBuffer: 100 * 1024 * 1024,
    env: process.env
  }
);

output += `stdout:\n${result.stdout}\n\n`;
output += `stderr:\n${result.stderr}\n\n`;
output += `Exit code: ${result.status}\n\n`;

const lockExists = fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'));
const nmExists = fs.existsSync(path.join(cwd, 'node_modules'));

output += `=== Results ===\n`;
output += `pnpm-lock.yaml exists: ${lockExists}\n`;
output += `node_modules exists: ${nmExists}\n`;

if (lockExists) {
  const content = fs.readFileSync(path.join(cwd, 'pnpm-lock.yaml'), 'utf8');
  const lines = content.split('\n').length;
  output += `pnpm-lock.yaml line count: ${lines}\n`;
}

fs.writeFileSync(resultFile, output, 'utf8');
console.log(`Result written to ${resultFile}`);
