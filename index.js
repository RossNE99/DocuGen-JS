//Imports 
import fs from "fs";
import {generateMarkdown} from "./utils/generateMarkdown.js";
import {getUserInput} from "./utils/getUserInput.js"
import {getListInput} from "./utils/getUserInput.js"

//array of licenses for the user to pick from
const licenses = ['Apache-2.0', 'GPL-3.0', 'MIT', 'BSD-2-Clause', 'BSD 3-Clause', 'BSL-1.0', 'CC0-1.0l', 'EPL-2.0','AGPL-3.0','GPL-2.0','LGPL-2.1','MPL-2.0','Unlicense']

// array of questions for user
const questions = [
   {message: "What is the title of this project", name: "title", type: "input"},
   {message: "What is the description of this project", name: "description", type: "input"},
   {message: "What is the license for this project", name: "license", type: "list", choices: licenses},
   {message: "What is your Github username", name: "Github", type: "input"},
   {message: "What is your email address", name: "email", type: "input"},
];

//array of questions for the user, this list of questions is used for the list questions, for example instalation steps
const listQuestions = [
    {questionMessage: "Please enter a installation step for this project (enter one step at a time)", askAgainMessage:"Do you want to add another installation step for this project", isNumberd:true, name:"installationSteps"},
    {questionMessage: "Please enter the usage instructions for this project (enter one instruction at a time)", askAgainMessage:"Do you want to add another usage instruction for this project", isNumberd:true, name:"usage"},
    {questionMessage: "Please enter the contribution guidelines for this project (enter one guidline at a time)", askAgainMessage:"Do you want to add another contribution guideline for this project", isNumberd:false, name:"contribution"},
    {questionMessage: "Please enter a test for this project (enter one test at a time)", askAgainMessage:"Do you want to add another test for this project", isNumberd:false, name:"test"}
]

// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) {  //if there was an error then console log the error
          console.error('Error writing to file:', err);
        } else {    //if everything went ok then console log Success
          console.log(`Successfully wrote ${fileName} file`);
        }
    })
}

// function to initialize program
const init = async () => {
    const repoDetails = await getUserInput(questions)   //set repoDetails to the users answers to the questions

    for (const question of listQuestions) { //used for loop here instead of foreach as foreach doesnt play nice with async
        repoDetails[question.name] = await getListInput(question.questionMessage, question.askAgainMessage, question.isNumberd)
        //add the asnwers for the list questions to repoDetails
    }

    const readmeContent = generateMarkdown(repoDetails) //call the generateMarkdown and pass in repoDetails. this will create a markdown string, formatted correctly with titles etc
    writeToFile("README.md", readmeContent) //call the writeToFile function, pass in the name of the file u want to create and the content u want to add to it

}

// function call to initialize program
init();


