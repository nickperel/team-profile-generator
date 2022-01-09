const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const employeeArray = [];

function createManager() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager of this team?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID Number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's Email Address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's Office Number?"
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeArray.push(manager);
        addTeamMember();
    }) 
}

function addTeamMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finished Building My Team!']
        }
    ])
    .then(answers => {
        if (answers.addEmployee == 'Add an Engineer') {
            // start inquirer.prompt for an Engineer
            createEngineer();
        } else if (answers.addEmployee == 'Add an Intern') {
            // start inquirer.prompt for an Intern
            createIntern();
        } else {
            // start generating the HTML file once finished
            const generatedHTML = generateHTML(employeeArray);
            fs.writeFile('./dist/index.html', generatedHTML, () => {
                console.log('HTML was successfully generated!')
            });
        }
    })
}

function createEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer of this team?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineer's ID Number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's Email Address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's GitHub Username?"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeArray.push(engineer);
        addTeamMember();
    }) 
}

function createIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern of this team?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Intern's ID Number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's Email Address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the Intern attend?"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeArray.push(intern);
        addTeamMember();
    }) 
}

createManager();