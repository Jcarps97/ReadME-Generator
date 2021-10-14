// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// fileName, data
function writeToFile(data) {
    const licenseSection = renderLicenseSection(license)
   
    const textMessage = `
    ## Title: ${data.title}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)


    ## Description: 
    ${data.description}
    ## Installation: 
    ${data.installation}
    ## Usage: 
    ${data.usage}
    ## Contributing: 
    ${data.contribution}
    ## Tests: 
    ${data.test}
    Github: ${data.github}
    Email: ${data.email}
    `
        //Add in data from generateMarkdown
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
