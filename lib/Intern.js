const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name);

        this.id = id;
        this.email = email;
    }
}

module.exports = Intern