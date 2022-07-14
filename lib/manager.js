import Employee from "./Employee.js";

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    officeNumber = this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  officeNumber() {
    return this.officeNumber;
  }
}

export default Manager;
