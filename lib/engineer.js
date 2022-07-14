import employee from "./employee";

export default engineer;

class engineer extends employee {
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
