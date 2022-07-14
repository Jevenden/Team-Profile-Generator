import inquirer from "inquirer";
// import fs from "fs";
import engineer from "./lib/engineer.js";
import intern from "./lib/intern.js";
import manager from "./lib/Manager.js";

let newStaff = [];

const basicQuestions = async () => {
  const basicAnswers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
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
  // .then((data) => {
  //   const response = generateMarkdown(data);
  //   makeReadme(response);
  // })
  // .catch((err) => console.log(err));
}

// // Function call to initialize app
startQuestions();
