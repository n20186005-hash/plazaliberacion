const fs = require('fs');
const path = 'h:\\GitHub\\plazaliberacion\\write_tool_test.txt';
const current = fs.readFileSync(path, 'utf8');
const appended = current + '\nAPPENDED_BY_NODE_AT_' + Date.now() + '\n';
fs.writeFileSync(path, appended, 'utf8');
process.exit(0);
