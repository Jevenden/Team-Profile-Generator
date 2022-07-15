import Employee from "./Employee.js";

export default class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    school = this.school;
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
    return "Intern";
  };
}
