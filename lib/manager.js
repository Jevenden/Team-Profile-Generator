import employee from "./employee";

export default manager;

class manager extends employee {
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
