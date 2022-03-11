const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);

        this.github = githubUsername;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

    employeeDisplay() {
        return {
          name: this.name,
          id: this.id,
          email: this.email,
          github: this.github,
          role: this.getRole()
        };
    }

}

module.exports = Engineer;