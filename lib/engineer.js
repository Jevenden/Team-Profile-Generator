import Employee from "./Employee.js";

export default class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    github = this.github;
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
    return "Engineer";
  };
}
