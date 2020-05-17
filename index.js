const inquirer = require('inquirer');
const { writeFile, readFile } = require('./utils/generateReadme');
const generateMarkdown = require('./utils/generateMarkdown.js');

const promptUser = () => {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'title',
         message: 'What is the title of your project? (REQUIRED)',
         validate: titleInput => {
            if (titleInput) {
               return true;
            } else {
               console.log('Enter the name of your project.');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'description',
         message: 'Type in a description of your project: (REQUIRED)',
         validate: descriptionInput => {
            if (descriptionInput) {
               return true;
            } else {
               console.log('Enter the description of your project.');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'installation',
         message: 'Type instructions for how to install your project: (REQUIRED)',
         validate: installationInput => {
            if (installationInput) {
               return true;
            } else {
               console.log('Enter the installation instructions for your project.');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'usage',
         message: 'Type in a description of how the user would use your project: (REQUIRED)',
         validate: usageInput => {
            if (usageInput) {
               return true;
            } else {
               console.log("Enter the steps the user would need to take to user the project.");
               return false;
            }
         }
      },
      {
         type: 'list',
         name: 'license',
         message: 'Choose a license to include in the readme.md:',
         choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'Mozilla Public License 2.0', 'Unlicense']
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

const testData = {
   title: 'Run Buddy',
   description: 'A website designed to match dominants with submissives.',
   installation: 'Put on full leather, attach the ball gag, and strap yourself in to the body holder.  Now, close your eyes.',
   usage: 'By using a bit of imagination, a user can be taken to a land of infinite pleasure where they can release the everyday responsibilities and put someone else in charge.',
   license: 'MIT',
   contributions: 'Do not take my code.',
   tests: 'find someone with a riding crop and tight leathers.',
   email: 'barooskavitch@aol.com',
   github: 'barooskavitch'
 }


// generateMarkdown(testData)
//    .then(data => {
//       writeFile(data);
//    });

promptUser()
   .then(answers => {
      return generateMarkdown(answers);
   })
   .then(data => {
      return writeFile(data);
   });


//readFile();
//promptUser().then(answers => console.log(answers));

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

