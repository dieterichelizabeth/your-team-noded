const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, newOffice) {
        super(name);

        this.id = id;
        this.email = email;
        this.office = newOffice;
        this.role = 'Manager';
    }

    addOffice(newOffice) {
        this.office = newOffice;
    }
        
    getRole() {
        this.role = 'Manager';
    }

    employeeDisplay() {
        return {
          name: this.name,
          id: this.id,
          email: this.email,
          office: this.office,
          role: this.role
        };
      }
}

module.exports = Manager