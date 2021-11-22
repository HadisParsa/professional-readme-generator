// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None Required') {
    return 'None required.';


  } else if (license === 'MIT') {
    return `![license: MIT](https://img.shields.io/badge/license-MIT-blue)`;

  } else if (license === 'GNU') {
    return `![license: GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-red)`;

  } else if (license === 'Apache 2.0') {
    return `![license: Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-green)`;
  }

}
renderLicenseBadge()

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None Required') {
    return 'None required.';

  } else if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`;

  } else if (license === 'GNU') {
    return `[GNU General Public License v3.0](https://opensource.org/licenses/GPL-2.0)`;

  } else if (license === 'Apache 2.0') {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
}
renderLicenseLink()


// A function to generate markdown for README
function generateMarkdown(data) {

  return `# <My-Project-Title>
  
${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#Questions )


  ## Installation
 
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.Credits}

 🏆  ## License  ## Badges
  
  ${renderLicenseBadge(data.license)}

  ## Questions 
  If you have any questions please do not do not hesitate to contact me with following options,

 Email address: ${data.email} 
 Github: [Github link](https://github.com/${data.git}) 

`;
}

module.exports = generateMarkdown;