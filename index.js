const fs = require('fs');
const path = require('path');
const employee = require('./lib/employee.js');
const manager = require("./lib/manager.js");
const intern = require('./lib/intern');
const engineer = require('./lib/engineer.js');
const inquirer = require("inquirer");
const dirOut = path.resolve(__dirname, "dist");
const pathOut = path.join(dirOut, "index.html");
const generate = require('./src/page-template.js');

team = [];

function run() {

    function teambuild() {
        inquirer.prompt([{
            type: "list",
            message: "What role would you like to add?",
            name: "addemployee",
            choices: ["manager", "engineer", "intern", "I'm finished."]
        }])
        .then(function(input) {
            switch(input.addemployee) {
                case "manager":
                    addmanager();
                    break;
                
                case "engineer":
                    addengineer();
                    break;
                
                case "intern":
                    addintern();
                    break;

                default: buildhtml();

            }
        })
    }

    function addmanager() {
        inquirer.prompt ([
        
            {
                type: "input",
                name: "managername",
                message: "Enter manager's name."
            },

            {
                type: "input",
                name: "managerid",
                message: "Enter the manager's employee Id."
            },

            {
                type: "input",
                name: "manageremail",
                message: "Enter the manager's email."
            },

            {
                type: "input",
                name: "manageroffice",
                message: "Enter the manager's office number."
            }
        ])
        .then(answers => {
            const managerinfo = new manager(answers.managername, answers.managerid, answers.manageremail, answers.manageroffice);
            team.push(managerinfo);
            teambuild();
        });
    }

    function addengineer() {
        inquirer.prompt ([
        
            {
                type: "input",
                name: "engineername",
                message: "Enter engineer's name."
            },

            {
                type: "input",
                name: "engineerid",
                message: "Enter the engineer's employee Id."
            },

            {
                type: "input",
                name: "engineeremail",
                message: "Enter the engineer's email."
            },

            {
                type: "input",
                name: "engineergit",
                message: "Enter the engineer's github user name."
            }
        ])
        .then(answers => {
            const engineerinfo = new engineer(answers.engineername, answers.engineerid, answers.engineeremail, answers.engineergit);
            team.push(engineerinfo);
            teambuild();
        });
    }

    function addintern() {
        inquirer.prompt ([
        
            {
                type: "input",
                name: "internname",
                message: "Enter intern's name."
            },

            {
                type: "input",
                name: "internid",
                message: "Enter the intern's employee Id."
            },

            {
                type: "input",
                name: "internemail",
                message: "Enter the intern's email."
            },

            {
                type: "input",
                name: "internschool",
                message: "Enter the intern's alma mater."
            }
        ])
        .then(answers => {
            const interninfo = new intern(answers.internname, answers.internid, answers.internemail, answers.internschool);
            team.push(interninfo);
            teambuild();
        });
    }

    function buildhtml() {
        
        fs.writeFileSync(pathOut, generate(team), "UTF-8")
    }

    teambuild();
}

run();

