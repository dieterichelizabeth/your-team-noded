class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  getName(name){
    this.name = name;
  }
  
  getId(id){
    this.id = id;
  }

  getEmail(email){
    this.email = email;
  }
}

module.exports = Employee;