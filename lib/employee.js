export default class Employee {
  constructor(name, id, email) {
    name = this.name;
    id = this.id;
    email = this.email;
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
    return "Employee";
  };
}
