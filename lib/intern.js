import employee from "./employee";

export default intern;

class intern extends employee {
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
