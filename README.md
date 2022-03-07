# your-team-noded

Your Team Noded is a generator which builds team profiles based on user input - built with Javascript.

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

The project is a command-line application which captures user responses to prompts about their employees/team.
The application starts with a team name and asks for information about your manager (name, id, email). From there, users can input as many employees (intern/engineer) as they desire. In addition to name, id, and email, the manager prompts will ask for an office number, the intern prompts will ask for school name, and engineer prompts will ask for a link to the employee's github. Once the user is satisfied with their team input, they can mark their team complete- and an index.html is generated. The html file displays data on each employee and the team name. Email links are functional and open your mailbox to send an email.

The application uses Jest for running the unit tests and Inquirer for collecting input from the user.

## Demo

https://user-images.githubusercontent.com/95142863/156991717-64c1af37-f2e6-4b55-9dce-b0c110c3b6ce.mp4

## Usage/Example

The video above shows how to use the app, and an example screenshot of a generated team profile. Follow the installation instructions below to test! Once your team profile is complete, it will appear in the "distribution" folder! The assets folder within the distribution folder contain styling/images for your index.html.

## Installation

This project requires node.js. In the terminal-

Check that node is installed

```bash
node -v
```

Clone the repo

```bash
git clone https://github.com/dieterichelizabeth/readme-ready-node.git
```

Install npm packages

```bash
npm i
```

Invoke the application by running-

```bash
node index
```

## Documentation

- [npm Documentation](https://docs.npmjs.com/)
- [inquirer Documentation](https://www.npmjs.com/package/inquirer)
- [jest Documentation](https://jestjs.io/docs/getting-started)
