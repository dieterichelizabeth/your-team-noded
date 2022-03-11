const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, currentSchool) {
        super(name, id, email);

        this.school = currentSchool
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    employeeDisplay() {
        return {
          name: this.name,
          id: this.id,
          email: this.email,
          school: this.school,
          role: this.getRole()
        };
    }
}

module.exports = Intern