import fs from "fs";
import path from 'path';
import {generateMarkdown} from "./utils/generateMarkdown.js";
import {getUserInput} from "./utils/getUserInput.js"
import {getListInput} from "./utils/getUserInput.js"

const licenses = ['Apache-2.0', 'GPL-3.0', 'MIT', 'BSD-2-Clause', 'BSD 3-Clause', 'BSL-1.0', 'CC0-1.0l', 'EPL-2.0','AGPL-3.0','GPL-2.0','LGPL-2.1','MPL-2.0','Unlicense']

// array of questions for user
const questions = [
   {message: "What is the title of this project", name: "title", type: "input"},
   {message: "What is the description of this project", name: "description", type: "input"},
   {message: "What is the license for this project", name: "license", type: "list", choices: licenses},
   {message: "What is your Github username", name: "Github", type: "input"},
   {message: "What is your email address", name: "email", type: "input"},
];

const listQuestions = [
    {questionMessage: "Please enter a installation step for this project (enter one step at a time)", askAgainMessage:"Do you want to add another installation step for this project", isNumberd:true, name:"installationSteps"},
    {questionMessage: "Please enter the usage instructions for this project (enter one instruction at a time)", askAgainMessage:"Do you want to add another usage instruction for this project", isNumberd:true, name:"usage"},
    {questionMessage: "Please enter the contribution guidelines for this project (enter one guidline at a time)", askAgainMessage:"Do you want to add another contribution guideline for this project", isNumberd:false, name:"contribution"},
    {questionMessage: "Please enter a test for this project (enter one test at a time)", askAgainMessage:"Do you want to add another test for this project", isNumberd:false, name:"test"}
]

// function to write README file
const writeToFile = (fileName, data) => {
    
}

// function to initialize program
const init = async () => {
    const repoDetails = await getUserInput(questions)

    for (const question of listQuestions) {
        repoDetails[question.name] = await getListInput(question.questionMessage, question.askAgainMessage, question.isNumberd)
    }

    console.log(generateMarkdown(repoDetails))
}

// function call to initialize program
init();


