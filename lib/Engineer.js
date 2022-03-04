const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name);

        this.id = id;
        this.email = email;
        this.github = githubUsername;
        this.role = 'Engineer';
    }

    getGithub(githubUsername) {
        this.github = githubUsername;
    }

    getRole() {
        this.role = 'Engineer';
    }

    employeeDisplay() {
        return {
          name: this.name,
          id: this.id,
          email: this.email,
          github: this.github,
          role: this.role
        };
    }

}

module.exports = Engineer;