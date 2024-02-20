# DocuGen-JS 
## README's, Made easy!

## Description
DocuGen-JS is a node js app that helps developers create README files for their projects. A README file is a document that provides essential information about a project, such as its name, description, installation, usage, license, and contributors. README Generator simplifies the process of creating a README file by asking the user to input the relevant details and then formatting them into a markdown file.

The motivation behind creating DocuGen-JS was to streamline the often tedious process of crafting README files for software projects, github repos, etc. As a developer myself, I've experienced firsthand the hassle of repeatedly writing and formatting READMEs for various projects. With DocuGen-JS, my aim is to alleviate this burden by providing a simple and efficient tool that automates the generation of README files. By abstracting away the manual labor involved in creating these essential project documents, developers can focus more on coding and less on documentation, ultimately enhancing productivity and project clarity.

To use DocuGen-JS, you need to have node js installed on your system. You can download node js from here. Once you have node js, you can clone this repository or download the zip file. Then, navigate to the folder where you have the app and run `node index.js` in your terminal. You will be prompted to answer some questions about your project, such as its name, description, installation, usage, license, and contributors. After you answer all the questions, a README.md file will be generated in the same folder. You can then edit, rename, or move the file as you wish.

Please see a full list of features [here](#Features)

## Table of Contents

- [Dev Requirements](#Dev-Requirements)
- [Dev Environment Setup](#Dev-Environment-Setup)
- [Enduser usage instructions](#End-user-usage-instructions)
- [Features](#Features)
- [How to contribute](#How-to-contribute)
- [technologies ](#technologies)
- [Screenshot](#Screenshot)
- [Credits](#credits)
- [License](#license)

## Dev Requirements
Git/GitBash, VS Code, NodeJS, and the source code, of course! 🛠️

## Dev Environment Setup
Please make sure you have NodeJS downloaded
To get the development environment running:
1. Clone this repo
2. Navagate to the repo on your local machine
3. run `npm i` and this will install all the depencencys needed
4. run `node index.js` to run DocuGen-JS!

- `index.js`: Contains the js code to initialize and run the app
- `utils/generateMarkdown.js`: Contains all javaScript code to create the markdown file
- `utils/getUserInput.js`: Contains all javaScript to get the users input
- `assets/images/`: Contains all images used in the project/readme

## Enduser usage instructions
Please make sure you have NodeJS downloaded

1. Clone this repo
2. Navagate to the repo on your local machine
3. run `npm i` and this will install all the depencencys needed
4. run `node index.js` to run DocuGen-JS!

## Features
- **Allows you to easily create readme files in a clean format**
- **Saves the readme file to you local file system**

## How to contribute
1. Fork this repository
2. Clone the repository
3. Create a branch for your bug fix or feature
4. Make necessary changes and commit those changes
5. Push changes to GitHub
6. Create a pull request to this repo to submit your changes for review

## Technologies
- **JavaScript**
- **NodeJS**
- **Inquirer**

## Screenshot

The following image shows the web application's functionality:

![Screenshott](assets/images/DocuGen-JS.png)

> **Note**: This app runs in the NodeJS environment.


## Credits 
- **Ross** - Source Code

---

## Licence

MIT License

Copyright (c) 2024 RossNE99

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.