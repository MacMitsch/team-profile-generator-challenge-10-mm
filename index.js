const inquirer = require("inquirer");
const path = require("path");

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const fs = require("fs");
const generateTeam = require("./src/template");

teamArray=[];

function RunApp () {
    function createTeam () {
        inquirer.prompt([{
            type:"list",
            name:"addEmployee",
            message:"what position are adding to our team?",
            choices: ["Engineer","Intern","Manager"]
        }]).then(function (userInput){
            switch(userInput.addEmployee) {
                case "Engineer":
                    addEngineer(); 
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Manager":
                    addManager();
                    break;
                default:
                    htmlBuilder();
            }
        })
    }


    // Add Engineer Function
function addEngineer(){
    inquirer.prompt([
        {
            type:"input",
            name: "engineerName",
            message:"What is the new engineers name?"
        }, {
            type:"input",
            name: "engineerId",
            message: "What is the Employee ID number?"
        }, {
            type:"input",
            name:"engineerEmail",
            message: "What is the new Employees Email?"
        }, {
            type:"input",
            name:"engineerGithub",
            message: "What is the Employees Github?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
    });
}
















}

