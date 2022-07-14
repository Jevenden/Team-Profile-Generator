import Employee from "./Employee.js";

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    school = this.school;
  }

  getRole() {
    return "Intern";
  }

  school() {
    return this.school;
  }
}

export default Intern;
