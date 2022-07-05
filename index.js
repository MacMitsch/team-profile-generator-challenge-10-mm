const inquirer = require("inquirer");

const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");

const fs = require("fs")

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