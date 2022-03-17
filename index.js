const manager = require("./lib/manager.js");
const employee = require('./lib/employee.js');
const intern = require('./lib/intern');
const engineer = require('./lib/engineer.js');
const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const dirOut = path.resolve(__dirname, "output");
const pathOut = path.join(dirOut, "index.html");
const generate = require('./src/page-template.js');

