const fs = require('node:fs');
const path = require('node:path');

const cwd = 'h:\\GitHub\\plazaliberacion';
console.log('Node version:', process.version);
console.log('CWD:', process.cwd());
console.log('package.json exists:', fs.existsSync(path.join(cwd, 'package.json')));

const testFile = path.join(cwd, 'test_write.txt');
fs.writeFileSync(testFile, 'Hello from Node.js at ' + new Date().toISOString(), 'utf8');
console.log('Test file written:', testFile);
console.log('Test file exists:', fs.existsSync(testFile));
console.log('Test file content:', fs.readFileSync(testFile, 'utf8'));

const { spawnSync } = require('node:child_process');
const pnpmPath = 'C:\\Users\\dcc\\AppData\\Roaming\\npm\\pnpm.cmd';
console.log('pnpm exists:', fs.existsSync(pnpmPath));

const result = spawnSync(pnpmPath, ['--version'], { encoding: 'utf8', shell: true });
console.log('pnpm version stdout:', result.stdout);
console.log('pnpm version stderr:', result.stderr);
console.log('pnpm version exit code:', result.status);
if (result.error) console.log('pnpm error:', result.error.message);
