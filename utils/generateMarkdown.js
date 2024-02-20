// function to generate markdown for README
export const generateMarkdown = (data) => {

  return `
# ${data.title}

![LicenseBadge](https://img.shields.io/badge/License-${data.license.replace(/-/g, '--').replace(/ /g ,'%20')}-green)

## Description
${data.description}
## Table of Contents
- [Description](#Description)
- [Table of Contents](#Table-of-Contents)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)

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
- Email: ${data.Github}
- Github: ${data.email}

## License
${data.license}
`;
}
