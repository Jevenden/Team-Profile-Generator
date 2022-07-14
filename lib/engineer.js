import Employee from "./Employee.js";

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    github = this.github;
  }

  getRole() {
    return "Engineer";
  }

  github() {
    return this.github;
  }
}

export default Engineer;
