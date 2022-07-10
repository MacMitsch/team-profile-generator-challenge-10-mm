const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What is the position of the new employee?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "That's it!"]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }
// OOP Functions

function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "What's the manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What's the manager's employee ID?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What's the manager's email?"
    },

    {
      type: "input",
      name: "managerNumber",
      message: "What's the manager's phone number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
    teamArray.push(manager);
    createTeam();
  });

}


function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What's the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What's the engineer's employee ID?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What's the engineer's email?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What's the engineer's GitHub?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What's the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What's the intern's employee ID?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What's the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  // return to menu with option to add another team member create team

  // Would you like to add a team member?
  // Yes || No
  // If Yes --> Then select an employee role for your new team member: Manager, Engineer, Intern
  // If No --> Create Team


function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();