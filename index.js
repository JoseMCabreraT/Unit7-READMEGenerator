// TODO: Include packages needed for this application

import inquirer from "inquirer"; 
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";



// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'Whats your project Title?:',

    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter Description:',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you Install the application?:',

    },

    {

    type: 'input',
    name: 'usage',
    message: 'Usage:',
    },

    {

    type: 'input',
    name: 'Contribuitors',
    message: 'Please enter the Contribuitors:',

    },

    {

    type: 'input',
    name: 'test',
    message: 'Tests Instructions:',

    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select a license:',
        choices: ['Apache 2.0', 'GPL 3.0', 'European Union Public License', 'GNU General Public License v3.0', 'Microsoft', 'MIT', 'Mozilla', 'PostgreSQL', 'None'],
    },

    {
        type: 'input',
        name: 'username',
        message: 'Please enter GitHub username:',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter email address:',
    },
]; //array of questions.


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('The README file has been successfully created.');
    }); 
} //function for creating the README file.

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const generateREADME = generateMarkdown(answers);
         
        writeToFile('GeneratedREADME.md', generateREADME);
    });
} // function for initialize the app.

// Function call to initialize app
init();
