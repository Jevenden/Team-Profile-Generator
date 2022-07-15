import Employee from "./Employee.js";

export default class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    officeNumber = this.officeNumber;
  }

  getName = () => {
    return name;
  };
  getId = () => {
    return id;
  };
  getEmail = () => {
    return email;
  };
  getRole = () => {
    return "Manager";
  };
}
