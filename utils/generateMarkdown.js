const fs = require('fs');
//const readFile = require("./generateReadme.js").readFile;

// function to generate markdown for README
const generateMarkdown = data => {
  //console.log(data);

  return `
# ${data.title}
${getBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Contact Me](#contact-me)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${getLicense(data.license)}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Contact Me
* [Email](mailto:${data.email})

* [GitHub](https://www.github.com/${data.github})
`;
}

const getBadge = license => {
  const licenseWOSpaces = license.replace(/ /g, "%20");
  return `
![](https://img.shields.io/static/v1?label=license&message=${licenseWOSpaces}&color=green)
  `;
}

const getLicense = license => {
  const arrLicense = license.split(" ");
  let fileName = arrLicense[0] + ".txt";

  //return readFile(fileName);
  // readFile(fileName)
  //   .then(data => {
  //     return data;
  //   });
  const content = fs.readFileSync('./src/' + fileName, 'utf8');
  return content;
}

module.exports = generateMarkdown;
