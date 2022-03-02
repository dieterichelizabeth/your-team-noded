const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');

function Team() {
    this.teamComplete = false;
    this.employee;
};

Team.prototype.initializeTeam = function() {
    console.log(`
  <><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
    Create a Team Profile by answering the prompts!
          - We'll start with your Team Name -
  <><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
    `);
    inquirer
      .prompt(
      {
       // get the team name
       type: 'input',
       name: 'teamName',
       message: "What is the name of your team?",  
      })
    .then(({ teamName }) => {
      console.log(teamName)

      this.addManager();
    });
};

Team.prototype.addManager = function() {
    inquirer
      .prompt([
      {
       // get the Manager name
       type: 'input',
       name: 'name',
       message: "What is your Manager's name?",
      },
      {
        // get the Manager name
        type: 'input',
        name: 'id',
        message: "What is your Manager's i.d.?", 
      },
      {
        // get the Manager email
        type: 'input',
        name: 'email',
        message: "What is your Manager's email?", 
      },
      {
        // get the Manager email
        type: 'input',
        name: 'newOffice',
        message: "What is your Manager's office number?", 
      }
    ])
      .then(({ name, id, email, newOffice }) => {
        this.employee = new Manager(name, id, email, newOffice);

        this.teamReview();
      }
    );
};


Team.prototype.teamReview = function() {
  inquirer
  .prompt([
  {
   // get the Manager name
   type: 'list',
   name: 'isComplete',
   message: "Would you like to add another team member?",
   choices: ['Intern', 'Engineer', 'My team is complete.']
  }
])
  .then (({isComplete}) => {
    console.log(isComplete);
    if (isComplete === 'Intern'){
      this.addIntern();
    }
    else if (isComplete === 'Engineer'){
      this.addEngineer();
    }
    else {
      this.teamDone();
    }
  })
};

Team.prototype.addIntern = function() {
  inquirer
      .prompt([
      {
       // get the Intern name
       type: 'input',
       name: 'name',
       message: "What is your Intern's name?",
      },
      {
        // get the Intern name
        type: 'input',
        name: 'id',
        message: "What is your Intern's i.d.?", 
      },
      {
        // get the Intern email
        type: 'input',
        name: 'email',
        message: "What is your Intern's email?", 
      },
      {
        // get the Intern email
        type: 'input',
        name: 'currentSchool',
        message: "What is your Intern's current school?", 
      }
    ])
    .then(({ name, id, email, currentSchool }) => {
      this.employee = new Intern(name, id, email, currentSchool);

      this.teamReview();
    }
    );
}

Team.prototype.addEngineer = function() {
  inquirer
      .prompt([
      {
       // get the Engineer name
       type: 'input',
       name: 'name',
       message: "What is your Engineer's name?",
      },
      {
        // get the Engineer name
        type: 'input',
        name: 'id',
        message: "What is your Engineer's i.d.?", 
      },
      {
        // get the Engineer email
        type: 'input',
        name: 'email',
        message: "What is your Engineer's email?", 
      },
      {
        // get the Engineer email
        type: 'input',
        name: 'githubUsername',
        message: "What is your Engineer's GitHub username?", 
      }
    ])
    .then(({ name, id, email, githubUsername }) => {
      this.employee = new Engineer(name, id, email, githubUsername);

      this.teamReview();
    }
    );
}

Team.prototype.teamDone = function() {
  console.log("completed team!");
  // pass the information to a generate html function
}

new Team().initializeTeam();
module.exports = Team;



/*
Psuedocoding
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/