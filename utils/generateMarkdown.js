
function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}


function renderLicenseSection(license) {}

function generateMarkdown(data) {
  const markdown =  `# ${data.title}
${data.description}
`;
console.log(markdown)
return markdown
}

module.exports = generateMarkdown;
