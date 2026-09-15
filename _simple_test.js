const fs = require('node:fs');
const path = require('node:path');

console.log('Current cwd:', process.cwd());
console.log('Script dir:', __dirname);

const testFile = path.join(__dirname, 'SIMPLE_TEST.txt');
const testContent = `Test at ${new Date().toISOString()}\ncwd: ${process.cwd()}\n`;

try {
  fs.writeFileSync(testFile, testContent, 'utf8');
  console.log('SUCCESS: Wrote', testFile);
  console.log('Content:', fs.readFileSync(testFile, 'utf8'));
} catch (e) {
  console.error('FAILED:', e.message);
  process.exit(1);
}
