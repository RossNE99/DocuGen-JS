// function to generate markdown for README
export const generateMarkdown = (data) => {
  //function to generate the Markdown in the correct format using string interpalation
  return `
# ${data.title}

![LicenseBadge](https://img.shields.io/badge/License-${data.license.replace(/-/g, '--').replace(/ /g ,'%20')}-green)

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
To get this app up and running simply follow these steps 🛠️
${data.installationSteps}

## Usage
Please see below for usage steps
${data.usage}

## Contributing
To controubte to this repo follow these steps
${data.contribution}

## Tests
${data.test}

## Questions
If you have questions i can be contacted via Github or email
- Email: ${data.email}
- Github: [${data.Github}](https://github.com/${data.Github})

## License
${data.license}
`;
}
