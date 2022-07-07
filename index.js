const inquirer = require("inquirer");

const Employee = require("./__test__/Lib/employee");
const Engineer = require("./__test__/Lib/engineer");
const Intern = require("./__test__/Lib/intern");
const Manager = require("./__test__/Lib/manager");
const path = require("path");
const fs = require("fs");


function runInquirer() {
    const promptArray = [{
        type:"input",
        name: "name",
        message:"What is your name?"
    },
    {
        type:"input",
        name:"id",
        message:"what is your ID?"
    },
    {
        type:"input",
        name:"email",
        message:"What is a good Email?"
    },
    {
        type:"list",
        name:"title",
        message:"What is your title?",
        choices: ["Engineer", "Intern", "Manager"]
    }];
    return inquirer
        .prompt(promptArray);
}
function runInquirerEngineer(){
    const promptArray = [{
        type:"input",
        name:"github",
        message:"What is your github?"
    }];
    return inquirer
        .prompt(promptArray);
}

function runInquirerIntern(){
    const promptArray = [{
        type:"input",
        name:"school",
        message:"What school do you attend?"
    }];
    return inquirer
        .prompt(promptArray);
}

function runInquirerManager() {
    const promptArray = [{
        type: "input",
        name:"EmployeeNumber",
        message: "What is your employee number?"
    }];
    return inquirer
        .prompt(promptArray);
}

