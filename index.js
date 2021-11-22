// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// An array of questions for user input
const UserQuestions = () => {

  return inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: "Please enter the title for this project."
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please, Provide a description explaining your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the steps required to use your project?'
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'What are the contributions guidlines that required to be followed?'
  },
  {
    type: 'input',
    name: 'test',
    message: "what are the instructions of testing?"
  },
  {
    type: 'input',
    name: 'Credits',
    message: 'Please, list your collaborators, third-party or followed tutorials  with links to their GitHub profiles (if you have any).'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license is applicable?',
    choices: [
      {
        value: 'MIT',
      },
      {
        value: 'GNU',
      },
      {
        value: 'Apache 2.0',
      },
      {
        value: 'None Required',
      },
    ],
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email.'
  },
  {
    type: 'input',
    name: 'git',
    message: 'What is your GitHub Profile username? '
  },

  ])
};

// Create a function to initialize app
const init = () => {
  UserQuestions()
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log("Your readme.md successfully generated!"))
    .catch((err) => console.error(err))
};

// Function call to initialize app
init();