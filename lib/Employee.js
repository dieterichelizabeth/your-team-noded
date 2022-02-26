function Employee(name, email) {
    // name parameter set to a default empty string (no name provided)
    this.name = name
  
    this.id = 1;
    this.email = email;
  }
  
module.exports = Employee;