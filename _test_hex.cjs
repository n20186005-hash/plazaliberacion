const buf = Buffer.from('TEST1234_HELLO_WORLD_ABCDEF_0123456789_abcdef_ABCDEF');
process.stdout.write(buf.toString('hex') + '\n');
process.stderr.write(buf.toString('hex') + '\n');
process.exit(0);
