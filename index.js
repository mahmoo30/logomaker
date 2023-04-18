const inquirer = require('inquirer');
const fs = require('fs');

// Import Dependencies
const questions = require('./assets/questions');
const Shape = require('./assets/shapes')
const fileName = "./producedFile/logo.svg";

// Creates New SVG File
function createLogo(response) {
    const svg = Shape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Your logo has been generated!'));
}

// Function that Starts Inquirer Questions to Users
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}
init();