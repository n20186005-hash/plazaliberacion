const fs = require('fs');
const src = 'h:\\GitHub\\plazalaserena\\pnpm-lock.yaml';
try {
  const stat = fs.statSync(src);
  process.exit(255);
} catch(e) {
  process.exit(100);
}
