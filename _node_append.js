const fs = require('node:fs');
const path = require('node:path');

const logFile = path.join('h:', 'GitHub', 'plazaliberacion', 'pnpm_new_log.txt');
const msg = `=== Node.js append test at ${new Date().toISOString()} ===\n`;

try {
  fs.appendFileSync(logFile, msg, 'utf8');
  console.log('SUCCESS: Appended to', logFile);
  const content = fs.readFileSync(logFile, 'utf8');
  console.log('Current content:');
  console.log(content);
} catch (e) {
  console.error('FAILED:', e.message);
  process.exit(1);
}
