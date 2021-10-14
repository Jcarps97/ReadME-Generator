// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache License 2.0") {
    badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  }
  else if(license === "Boost License 1.0") {
    badge = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)"
  }
  else {badge = ""}
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache License 2.0") {
    licenselink = "https://opensource.org/licenses/Apache-2.0"
  }
  else if(license === "Boost License 1.0") {
    licenselink = "https://www.boost.org/LICENSE_1_0.txt"
  }
  else {licenselink = ""}
  return licenselink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const licenselink = renderLicenseLink(license);
  if (badge === "") {
    return "No license"
  } else 
    return `${license}: ${licenselink}
            ${badge}`
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `

// `;
// }

module.exports = generateMarkdown;
