import inquirer from "inquirer";
// import fs from "fs";
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
  ]);
  if (basicAnswers.role === "Manager") {
    const managerAnswers = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a valid office number.");
          }
          return true;
        },
      },
    ]);

    const newManager = new manager(
      basicAnswers.name,
      basicAnswers.id,
      basicAnswers.email,
      managerAnswers.officeNumber
    );
    newStaff.push(newManager);
  }

  if (basicAnswers.role === "Engineer") {
    const engineerAnswers = await inquirer.prompt([
      {
        type: "input",
        message: "What is your github username?",
        name: "github",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a valid github username.");
          }
          return true;
        },
      },
    ]);
    const newEngineer = new engineer(
      basicAnswers.name,
      basicAnswers.id,
      basicAnswers.email,
      engineerAnswers.github
    );
    newStaff.push(newEngineer);
  }

  if (basicAnswers.role === "Intern") {
    const internAnswers = await inquirer.prompt([
      {
        type: "input",
        message: "What is your school name?",
        name: "school",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a valid school name.");
          }
          return true;
        },
      },
    ]);

    const newIntern = new intern(
      basicAnswers.name,
      basicAnswers.id,
      basicAnswers.email,
      internAnswers.school
    );
    newStaff.push(newIntern);
  }
};

// async function nextStep() {
//   await basicQuestions();
// }

// function makeReadme(data) {
//   writeFile("./completed READMEs/README.md", data, (err) =>
//     err
//       ? console.log(err)
//       : console.log(
//           "Success! Your README can be found in the Completed READMEs folder!"
//         )
//   );
// }

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
    console.log("Yer done for tonight!");
  }
  // .then((data) => {
  //   const response = generateMarkdown(data);
  //   makeReadme(response);
  // })
  // .catch((err) => console.log(err));
}

// // Function call to initialize app
startQuestions();
