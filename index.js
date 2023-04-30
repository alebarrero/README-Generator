const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application
const generateMarkdown= require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the Project Description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the Installation Instructions?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the Usage of this Project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What is the Contribution Info?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions (email)?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the License?',
        choices :['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    }
]

//RUN QUERY FUNC//

function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        const md = generateMarkdown(answers)
        fs.writeFile('test.md', md, (err) =>
        err ? console.error(err) : console.log('Success!')
        )
    })
    .catch((error)=>{
        console.log(error)

    })
}
runQuery()


function writeToFile(fileName, data) {}

