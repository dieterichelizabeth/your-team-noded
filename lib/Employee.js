class Employee {
  constructor() {
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