// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile()
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
    .then()
}

// Function call to initialize app
init();
