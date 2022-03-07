const inquirer = require('inquirer');
const fs = require ('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// assigns anonymous HTML template function in page-template.js to the variable generatePage
const generateHTML = require('./src/generateHTML');

function Team() {
    this.employee;
    this.team = [];
};

// Start/welcome- enter the team name and move to add Manager
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
       validate: teamName => {
        if (!teamName) {
          console.log('Please enter the name of your team');
          return false;
        } else {
          return true;
        }
      }
      })
    .then(({ teamName }) => {
      this.team.push(teamName);

      this.addManager();
    });
};

// Add your manager
Team.prototype.addManager = function() {
console.log(`
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
        -  Next, we'll add your manager -
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
`);

    inquirer
      .prompt([
      {
       // get the Manager name
       type: 'input',
       name: 'name',
       message: "What is your Manager's name?",
       validate: name => {
        if (!name) {
          console.log('Please enter a valid name');
          return false;
        } else {
          return true;
        }}
      },
      {
        // get the Manager name
        type: 'input',
        name: 'id',
        message: "What is your Manager's i.d.?", 
        validate: id => {
          if (!id) {
            console.log('Please enter a valid id');
            return false;
          } else {
            return true;
          }}
      },
      {
        // get the Manager email
        type: 'input',
        name: 'email',
        message: "What is your Manager's email?", 
        validate: email => {
          if (!email) {
            console.log('Please enter a valid email');
            return false;
          } else {
            return true;
          }}
      },
      {
        // get the Manager office #
        type: 'input',
        name: 'newOffice',
        message: "What is your Manager's office number?", 
        validate: newOffice => {
          if (!newOffice) {
            console.log('Please enter a valid office number');
            return false;
          } else {
            return true;
          }}
      }
    ])
      .then(({ name, id, email, newOffice }) => {
        // create a new Manager class
        this.employee = new Manager( name, id, email, newOffice );
        // push into the team array
        this.team.push(this.employee);
        // display for the user
        console.table(this.employee.employeeDisplay());
        this.teamReview();
      }
    );
};

// Asks the user if they want to add another Employee
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
    // if yes for intern, move to addIntern
    if (isComplete === 'Intern'){
      this.addIntern();
    }
    // if yes for engineer, move to addEngineer
    else if (isComplete === 'Engineer'){
      this.addEngineer();
    }
    // if not, the team is complete(done)
    else {
      this.teamDone();
    }
  })
};

// Add an Intern
Team.prototype.addIntern = function() {
console.log(`
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
              ...adding Intern...
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
`);
  inquirer
      .prompt([
      {
       // get the Intern name
       type: 'input',
       name: 'name',
       message: "What is your Intern's name?",
       validate: name => {
        if (!name) {
          console.log('Please enter a valid name');
          return false;
        } else {
          return true;
        }}
      },
      {
        // get the Intern id
        type: 'input',
        name: 'id',
        message: "What is your Intern's i.d.?", 
        validate: id => {
          if (!id) {
            console.log('Please enter a valid id');
            return false;
          } else {
            return true;
          }}
      },
      {
        // get the Intern email
        type: 'input',
        name: 'email',
        message: "What is your Intern's email?", 
        validate: email => {
          if (!email) {
            console.log('Please enter a valid email');
            return false;
          } else {
            return true;
          }}
      },
      {
        // get the Intern school
        type: 'input',
        name: 'currentSchool',
        message: "What is your Intern's current school?", 
        validate: currentSchool => {
          if (!currentSchool) {
            console.log('Please enter a valid school');
            return false;
          } else {
            return true;
          }}
      }
    ])
    .then(({ name, id, email, currentSchool }) => {
      // create a new Intern class
      this.employee = new Intern( name, id, email, currentSchool );
      // push it into the team array
      this.team.push(this.employee);
      // display for the user
      console.table(this.employee.employeeDisplay());

      this.teamReview();
    }
    );
}

// add an Engineer
Team.prototype.addEngineer = function() {
console.log(`
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
              ...adding Engineer...
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
`);
  inquirer
      .prompt([
      {
       // get the Engineer name
       type: 'input',
       name: 'name',
       message: "What is your Engineer's name?",
       validate: name => {
        if (!name) {
          console.log('Please enter a valid name');
          return false;
        } else {
          return true;
        }}
      },
      {
        // get the Engineer id
        type: 'input',
        name: 'id',
        message: "What is your Engineer's i.d.?", 
        validate: id => {
          if (!id) {
            console.log('Please enter a valid id');
            return false;
          } else {
            return true;
          }}
      },
      {
        // get the Engineer email
        type: 'input',
        name: 'email',
        message: "What is your Engineer's email?", 
        validate: email => {
          if (!email) {
            console.log('Please enter a valid email');
            return false;
          } else {
            return true;
          }}
      },
      {
        // get the Engineer Github Username
        type: 'input',
        name: 'githubUsername',
        message: "What is your Engineer's GitHub username?", 
        validate: githubUsername => {
          if (!githubUsername) {
            console.log('Please enter a valid username');
            return false;
          } else {
            return true;
          }}
      }
    ])
    .then(({ name, id, email, githubUsername }) => {
      // create a new Engineer class
      this.employee = new Engineer( name, id, email, githubUsername );
      // push the Engineer into the team array
      this.team.push(this.employee);
      // display for the user
      console.table(this.employee.employeeDisplay());

      this.teamReview();
    }
    );
}

// Team complete function
Team.prototype.teamDone = function() {
console.log(`
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
            ...your team loading...
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
`);
  // pass the information to a generate html function
  // console.log(this.team);
  const teamPage = generateHTML(this.team);
  fs.writeFile('./dist/index.html', teamPage, err => {
    if (err) throw new Error(err);
    console.log(`
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
 Team Profile complete!...check the 'dist' folder
<><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
`);
  });
}

new Team().initializeTeam();
module.exports = Team;
