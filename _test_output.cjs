const fs = require('fs');

const testData = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
let big = '';
for (let i = 0; i < 500; i++) big += testData;

process.stdout.write('TEST_BEGIN\n');
process.stdout.write('LEN:' + big.length + '\n');
process.stdout.write('DATA:' + big + '\n');
process.stdout.write('TEST_END\n');
process.stdout.write('FINAL_MARKER\n');
