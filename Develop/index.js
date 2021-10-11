// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const textMessage = `Here are the answers to the questions 
    Entry 1: ${response.title}
    Entry 2: ${response.description}
    Entry 3: ${response.installation}
    Entry 4: ${response.usage}
    Entry 5: ${response.contribution}
    Entry 6: ${response.test}
    Entry 7: ${response.github}
    Entry 8: ${response.email}
    `
        fs.writeFile("README.md", textMessage)
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
