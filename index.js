// Required imports
import inquirer from "inquirer";
import fs from "fs";
import createTeam from "./src/template.js";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/engineer.js";
import Intern from "./lib/intern.js";

// Variable to contain the new staff once created
let newStaff = [];

// Inquirer questions
const basicQuestions = async () => {
  const basicAnswers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter your name.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter a valid ID number.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter a valid email address.");
        }
        return true;
      },
    },
    {
      type: "list",
      message: "What is your new role on the team?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      message: "What is your office phone number?",
      name: "officeNumber",
      when: ({ role }) => role == "Manager",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter a valid office number.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "github",
      when: ({ role }) => role == "Engineer",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter a valid github username.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is the name of your school?",
      name: "school",
      when: ({ role }) => role == "Intern",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter a valid school name.");
        }
        return true;
      },
    },
  ]);
  if (basicAnswers.role === "Manager") {
    let newManager = new Manager(
      basicAnswers.name,
      basicAnswers.id,
      basicAnswers.email,
      basicAnswers.officeNumber
    );
    newStaff.push(newManager);
  } else if (basicAnswers.role === "Engineer") {
    let newEngineer = new Engineer(
      basicAnswers.name,
      basicAnswers.id,
      basicAnswers.email,
      basicAnswers.github
    );
    newStaff.push(newEngineer);
  } else {
    let newIntern = new Intern(
      basicAnswers.name,
      basicAnswers.id,
      basicAnswers.email,
      basicAnswers.school
    );
    newStaff.push(newIntern);
  }
};

// Function to initialize the questions and give the option to add more
// team members or complete the input and create the HTML
async function startQuestions() {
  await basicQuestions();

  const nextStep = await inquirer.prompt([
    {
      name: "newMember",
      type: "list",
      choices: ["Add new team member", "Create team"],
      message: "What would you like to do next?",
    },
  ]);

  if (nextStep.newMember === "Add new team member") {
    return startQuestions();
  } else {
    return makeTeam();
  }
}

// Function to route user info and create the HTML file
function makeTeam() {
  fs.writeFileSync("./dist/index.html", createTeam(newStaff), "utf-8");
  console.log("Your team profile page has been created!");
}

// // Function call to initialize the app
startQuestions();
