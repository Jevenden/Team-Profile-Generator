class Employee {
  constructor(name, id, email) {
    name = this.name;
    id = this.id;
    email = this.email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

export default Employee;

// if (basicAnswers.role === "Manager") {
//   const managerAnswers = await inquirer.prompt([
//     {
//       type: "input",
//       message: "What is your office number?",
//       name: "officeNumber",
//       validate: function (answer) {
//         if (answer.length < 1) {
//           return console.log("Please enter a valid office number.");
//         }
//         return true;
//       },
//     },
//   ]);
