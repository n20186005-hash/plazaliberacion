const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const cwd = 'h:\\GitHub\\plazaliberacion';
const logFile = path.join(cwd, 'pnpm_result.log');
const log = fs.createWriteStream(logFile, { flags: 'w' });

function logMsg(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  log.write(line);
}

logMsg(`Starting in ${cwd}`);
logMsg(`package.json exists: ${fs.existsSync(path.join(cwd, 'package.json'))}`);
logMsg(`.npmrc exists: ${fs.existsSync(path.join(cwd, '.npmrc'))}`);

const pnpm = spawn(
  'C:\\Users\\dcc\\AppData\\Roaming\\npm\\pnpm.cmd',
  ['install', '--no-frozen-lockfile', '--config.safe-save=false'],
  {
    cwd,
    env: process.env,
    shell: true
  }
);

pnpm.stdout.on('data', (data) => {
  log.write(data);
});

pnpm.stderr.on('data', (data) => {
  log.write(data);
});

pnpm.on('close', (code) => {
  logMsg(`pnpm exited with code ${code}`);
  logMsg(`pnpm-lock.yaml exists: ${fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))}`);
  logMsg(`node_modules exists: ${fs.existsSync(path.join(cwd, 'node_modules'))}`);
  
  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
    const content = fs.readFileSync(path.join(cwd, 'pnpm-lock.yaml'), 'utf8');
    const lines = content.split('\n').length;
    logMsg(`pnpm-lock.yaml line count: ${lines}`);
  }
  
  log.end();
  process.exit(code);
});
