const fs = require('fs');//Built-in module for file system operations
// This module allows you to interact with the file system in a way modeled on standard POSIX

console.log(fs);

const content = fs.readFileSync('./notes.txt', 'utf-8');
console.log(content);

const jsonContent = fs.readFileSync('./package.json', 'utf-8');
console.log(jsonContent);



//Require is coming from the wrapper function
//It is a function that is called by nodejs to wrap the module code
//It has exports, require, module, __filename, __dirname
//exports is an object that is used to export the module

//require is a function that is used to import the module
//module is an object that represents the current module


//Three modules are used in this file
//fs - file system module
//path - path module
//os - operating system module
//These modules are built-in modules in nodejs
//built in modules third party modules and user defined modules

