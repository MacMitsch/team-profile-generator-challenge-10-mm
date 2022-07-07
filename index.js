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
// add Intern function
function addIntern(){
    inquirer.prompt([
        {
            type:"input",
            name: "internName",
            message:"What is the new Interns name?"
        }, {
            type:"input",
            name: "internId",
            message: "What is the Interns ID number?"
        }, {
            type:"input",
            name:"internEmail",
            message: "What is the new Interns Email?"
        }, {
            type:"input",
            name:"internSchool",
            message: "What is the Interns School?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool);
        teamArray.push(intern);
        createTeam();
    });
}
// add Manager function
function addManager(){
    inquirer.prompt([
        {
            type:"input",
            name: "managerName",
            message:"What is the new Manager name?"
        }, {
            type:"input",
            name: "managerId",
            message: "What is the Manager ID number?"
        }, {
            type:"input",
            name:"managerEmail",
            message: "What is the new Manager Email?"
        }, {
            type:"input",
            name:"managerOfficeNumber",
            message: "What is the Manager's office number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    });
}
function htmlBuilder () {
    console.log("Team created.")

    fs.writeFileSync(outputPath, generateTeam(teamArray),"utf-8")
}
createTeam();

}

RunApp();