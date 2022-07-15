import inquirer from "inquirer";
// import fs from "fs";
// import Employee from "./lib/Employee.js";
import manager from "./lib/Manager.js";
import engineer from "./lib/engineer.js";
import intern from "./lib/intern.js";

let newStaff = [];

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
      message: "What is your office number?",
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
      name: "gitHub",
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
    const newManager = new manager(
      basicAnswers.name,
      basicAnswers.id,
      basicAnswers.email,
      basicAnswers.officeNumber
    );
    newStaff.push(newManager);
  } else if (basicAnswers.role === "Engineer") {
    const newEngineer = new engineer(
      basicAnswers.name,
      basicAnswers.id,
      basicAnswers.email,
      basicAnswers.gitHub
    );
    newStaff.push(newEngineer);
  } else {
    const newIntern = new intern(
      basicAnswers.name,
      basicAnswers.id,
      basicAnswers.email,
      basicAnswers.school
    );
    newStaff.push(newIntern);
  }
};

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
    console.log("Good fuckin' job! Go get a drink, you sexy bitch!");
  }
  // .then((data) => {
  //   const response = generateMarkdown(data);
  //   makeReadme(response);
  // })
  // .catch((err) => console.log(err));
}

// // Function call to initialize app
startQuestions();
