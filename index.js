import fs from "fs";
import path from 'path';
import {generateMarkdown} from "./utils/generateMarkdown.js";
import {getUserInput} from "./utils/getUserInput.js"

const licenses = ['Apache-2.0', 'GPL-3.0', 'MIT', 'BSD-2-Clause', 'BSD 3-Clause', 'BSL-1.0', 'CC0-1.0l', 'EPL-2.0','AGPL-3.0','GPL-2.0','LGPL-2.1','MPL-2.0','Unlicense']

// array of questions for user
const questions = [
   {message: "What is the title of this project", name: "title", type: "input"},
   {message: "What is the description of this project", name: "description", type: "input"},
   {message: "What are the installation steps for this project", name: "installationSteps", type: "input"},
   {message: "What is the usage information for this project", name: "usage", type: "input"},
   {message: "What is the license for this project", name: "license", type: "list", choices: licenses},
   {message: "What are the contribution guidelines for this project", name: "contribution", type: "input"},
   {message: "What are the test instructions for this project", name: "test", type: "input"},
   {message: "What is your Github username", name: "Github", type: "input"},
   {message: "What is your email address", name: "email", type: "input"},
];

// function to write README file
const writeToFile = (fileName, data) => {
}

// function to initialize program
const init = async () => {
    const repoDetails = getUserInput(questions)
}

// function call to initialize program
init();


