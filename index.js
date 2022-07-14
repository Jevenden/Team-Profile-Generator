import inquirer from "inquirer";
import fs from "fs";
import engineer from "./lib/engineer";
import intern from "./lib/intern";
import manager from "./lib/manager";

const newStaff = [];

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
      type: "checkbox",
      message: "What is your new role on the team?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
  if (answers.role === Manager) {
    const managerAnswers = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
    ]);
  }

  if (answers.role === Engineer) {
    const engineerAnswers = await inquirer.prompt([
      {
        type: "input",
        message: "What is your github username?",
        name: "gitUse",
      },
    ]);
  }

  if (answers.role === Intern) {
    const internAnswers = await inquirer.prompt([
      {
        type: "input",
        message: "What is your school name?",
        name: "school",
      },
    ]);
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
