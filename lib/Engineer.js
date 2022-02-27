const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name);

        this.id = id;
        this.email = email;
    }
        
    getRole() {
        this.role = 'Engineer';
    }
}

module.exports = Engineer