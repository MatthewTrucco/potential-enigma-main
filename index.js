const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Include packages needed for this application
const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "what is your email address?",
        name: "Email"
    },
    {
        type: "input",
        message: "what is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a short description of the project",
        name: "description"   
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    },
    {
        type: "input",
        message: "what command should be run for testing?",
        name: "tests"
    },
    {
        type: "list",
        message: "what kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "NONE"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error){
            return console.log(error)
        }
        console.log('success')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data){
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();
