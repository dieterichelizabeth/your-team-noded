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
}

module.exports = Intern