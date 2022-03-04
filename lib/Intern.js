const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name);

        this.id = id;
        this.email = email;
    }

    getSchool(currentSchool) {
        this.school = currentSchool;
    }

    getRole() {
        this.role = 'Intern';
    }

    employeeDisplay() {
        return {
          name: this.name,
          id: this.id,
          email: this.email,
          school: this.school,
          role: this.role
        };
    }
}

module.exports = Intern