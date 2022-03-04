const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, currentSchool) {
        super(name);

        this.id = id;
        this.email = email;
        this.school = currentSchool
        this.role = 'Intern';
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