// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// fileName, data
function writeToFile(data) {
    const textMessage = ` 
    Entry 1: ${data.title}
   - Entry 2: ${data.description}
   - Entry 3: ${data.installation}
   - Entry 4: ${data.usage}
   - Entry 5: ${data.contribution}
    Entry 6: ${data.test}
    Entry 7: ${data.github}
    Entry 8: ${data.email}
    `
        fs.writeFile("test.README.md", textMessage, function(error){
            console.log(error)
        })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'Project Title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description of application',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation Instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage Information',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Contribution Guidelines',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Test Instructions',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Github Username',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Email Address',
            name: 'email',
        },
    ])
    .then(response => {
        writeToFile(response)
    })
}

// Function call to initialize app
init();
