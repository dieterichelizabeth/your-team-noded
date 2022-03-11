const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, newOffice) {
        super(name, id, email);

        this.office = newOffice;
    }

    addOffice() {
        return this.office;
    }
        
    getRole() {
        return 'Manager';
    }

    employeeDisplay() {
        return {
          name: this.name,
          id: this.id,
          email: this.email,
          office: this.office,
          role: this.getRole(),
        };
      }
}

module.exports = Manager