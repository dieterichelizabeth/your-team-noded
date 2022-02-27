const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name);

        this.id = id;
        this.email = email;
    }

    addOffice(newOffice) {
        this.office = newOffice;
        }
        
    getRole() {
        this.role = 'Manager';
    }
}

module.exports = Manager