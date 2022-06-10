# your-team-noded

Your Team Noded is a a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. The application will prompt the user for their team name and manager information. From there, users can input as many employees (interns or engineers) as desired.

In addition to name, id, and email, the manager prompts will ask for an office number, the intern prompts will ask for school name, and engineer prompts will ask for a link to the employee's github. Once the user is satisfied with their team input, they can mark their team complete- and an index.html is generated. The html file displays data on each employee and the team name. Email links are functional and open your mailbox to send an email.

Built with JavaScript, [Jest](https://jestjs.io/), and the [Inquirer](https://www.npmjs.com/package/inquirer) package.

## Demo

https://user-images.githubusercontent.com/95142863/156991717-64c1af37-f2e6-4b55-9dce-b0c110c3b6ce.mp4

## Usage/Example

The video above shows how to use the app, and an example screenshot of a generated team profile. Follow the installation instructions below to test! Once your team profile is complete, it will appear in the "distribution" folder! The assets folder within the distribution folder contain styling/images for your index.html.

## Installation

Note: This project requires [Node.js](https://nodejs.org/en/). Here is a resource to get started: [How to Install NodeJS](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

Check that node is installed

```bash
node -v
```

Clone the repo

```bash
git clone https://https://github.com/dieterichelizabeth/your-team-noded.git
```

Install npm packages

```bash
npm i
```

Invoke the application by running-

```bash
node index
```

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

```
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
```

## Documentation

- [npm Documentation](https://docs.npmjs.com/)
- [Inquirer Documentation](https://www.npmjs.com/package/inquirer)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
