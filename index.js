//Import using require for the following: express, mysql2, inquirer
const mysql = require('mysql2');
const inquirer = require('inquirer');


inquirer.prompt([
    {
    type: "list",
      message: "Select an option",
      name: "option",
      choices: [
        {
          name: "View all departments",
          value: 1,
        },
        {
          name: "View all roles",
          value: 2,
        },
        {
          name: "View all employees",
          value: 3,
        },
        {
          name: "Add a department",
          value: 4,
        },
        {
          name: "Add a role",
          value: 5,
        },
        {
          name: "Add an employee",
          value: 6,
        },
        {
          name: "Update an employee role",
          value: 7,
        },
        {
          name: "Add a role",
          value: 8,
        }
      ]
      },    
    ])
    //for a resolved promise, pass in the answers (object) given by prompt
    .then((answers) => {
      console.log(answers.option);
      
    })
    //for a rejected promise, output an error
    .catch((error) => console.error(error));