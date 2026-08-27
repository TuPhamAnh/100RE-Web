#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
let finalArgs = args;

// Intercept 'deploy' and transform into 'pages deploy ./Frontend'
if (args.length === 0 || args[0] === 'deploy') {
  finalArgs = ['pages', 'deploy', './Frontend', '--project-name=100re-web', ...args.slice(1)];
}

const realWrangler = path.resolve(__dirname, '../node_modules/wrangler/bin/wrangler.js');

if (fs.existsSync(realWrangler)) {
  const child = spawn(process.execPath, [realWrangler, ...finalArgs], { stdio: 'inherit' });
  child.on('exit', (code) => process.exit(code || 0));
} else {
  // Fallback direct execution
  const child = spawn('npx', ['wrangler@3', ...finalArgs], { stdio: 'inherit', shell: true });
  child.on('exit', (code) => process.exit(code || 0));
}
