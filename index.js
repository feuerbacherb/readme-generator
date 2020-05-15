const inquirer = require('inquirer');

const promptUser = () => {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'title',
         message: 'What is the title of your project?'
      },
      {
         type: 'input',
         name: 'description',
         message: 'Type in a description of your project: (REQUIRED)'
      },
      {
         type: 'input',
         name: 'installation',
         message: 'Type instructions for how to install your project: (REQUIRED)'
      },
      {
         type: 'input',
         name: 'usage',
         message: 'Type in a description of how the user would use your project: (REQUIRED)'
      },
      {
         type: 'list',
         name: 'license',
         message: 'Choose a license to include in the readme.md:',
         choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense']
      },
      {
         type: 'input',
         name: 'contributions',
         message: 'Enter guidelines for those who wish to contribute to your project:'
      },
      {
         type: 'input',
         name: 'tests',
         message: 'Enter how to test your project:'
      },
      {
         type: 'input',
         name: 'email',
         message: 'Enter your email address:'
      },
      {
         type: 'input',
         name: 'github',
         message: 'Enter your GitHub username:'
      }
   ]);
};

promptUser().then(answers => console.log(answers));

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
