const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const colors = require('colors');

const generateHTML = require('./src/teamGenerator');

const Manager = require("./lib/manager");
const juniorDeveloper = require("./lib/juniorDeveloper");
const seniorEngineer = require("./lib/seniorEngineer");


const teamArray = [];
const addManager = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Please enter managers name'
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter managers ID number"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter managers email address"
            },
            {
                type: 'input',
                name: 'phoneNum',
                message: "Please enter managers telephone number"
            }
        ])
        .then(managerInput => {
            const { name, id, email, phoneNum } = managerInput;
            const manager = new Manager(name, id, email, phoneNum);
            teamArray.push(manager);
            console.log(manager);
        })
};

// juniorDeveloper and seniorEngineer 
const addEmployee = () => {
    return inquirer.prompt([{
                type: 'list',
                name: 'role',
                message: "Please enter employee's role",
                choices: ['juniorDeveloper', 'seniorEngineer']
            },
            {
                type: 'input',
                name: 'name',
                message: "Please enter employees name"
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter employees ID number"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter employees email address"
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter employees Github username",
                when: (input) => input.role === ("juniorDeveloper" || "seniorEngineer"),
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: "Would you like to add another employee?",
                default: false
            }
        ])
        .then(employeeData => {
            let { name, id, email, role, github, confirmAddEmployee } = employeeData;
            let employee;
            if (role === "juniorDeveloper") {
                employee = new juniorDeveloper(name, id, email, github);
                console.log(employee);

            } else if (role === "seniorEngineer") {
                employee = new seniorEngineer(name, id, email, github);
                console.log(employee);
            }
            teamArray.push(employee);
            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })
}

// Write to HTML
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        console.log(data),
            err ? console.log(err) : console.log('Successfully created HTML file'.underline.green)
    })
}

// Add input to as needed
addManager()
    .then(addEmployee).then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });