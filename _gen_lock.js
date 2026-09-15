const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const cwd = 'h:\\GitHub\\plazaliberacion';
const logFile = path.join(cwd, 'pnpm_gen.log');
const log = fs.createWriteStream(logFile, { flags: 'w' });

function logMsg(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  process.stdout.write(line);
  log.write(line);
}

logMsg(`Starting in ${cwd}`);
logMsg(`package.json exists: ${fs.existsSync(path.join(cwd, 'package.json'))}`);

const args = [
  'install',
  '--no-frozen-lockfile',
  '--lockfile-only',
  '--config.safe-save=false',
  '--config.node-linker=hoisted',
  '--ignore-scripts',
  '--reporter=default'
];

logMsg(`Running: pnpm ${args.join(' ')}`);

const pnpm = spawn(
  'C:\\Users\\dcc\\AppData\\Roaming\\npm\\pnpm.cmd',
  args,
  {
    cwd,
    env: {
      ...process.env,
      PNPM_LOG_LEVEL: 'info',
      CI: 'true',
    },
  }
);

pnpm.stdout.on('data', (data) => {
  const text = data.toString('utf8');
  process.stdout.write(text);
  log.write(text);
});

pnpm.stderr.on('data', (data) => {
  const text = data.toString('utf8');
  process.stderr.write(text);
  log.write(text);
});

pnpm.on('close', (code) => {
  logMsg(`pnpm exited with code ${code}`);
  const lockPath = path.join(cwd, 'pnpm-lock.yaml');
  logMsg(`pnpm-lock.yaml exists: ${fs.existsSync(lockPath)}`);
  if (fs.existsSync(lockPath)) {
    const stat = fs.statSync(lockPath);
    logMsg(`pnpm-lock.yaml size: ${stat.size} bytes`);
  }
  log.end();
  process.exit(code);
});
