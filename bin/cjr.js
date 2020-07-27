#!/usr/bin/env node
const child_process = require('child_process');

// console.log('hello world',process.argv)
console.log(`hello ${process.argv[2]||'world'}`)
// require('commander')
//   .version(require('../package').version)
//   .usage('<command> [options]')
//   .command('init', 'init a react template')
//   .parse(process.argv);
 
let subProcess=child_process.exec("cd ../ && git version",function(err,stdout){
 if(err)console.log(err);
 console.log(stdout);
//  subProcess.kill()
});