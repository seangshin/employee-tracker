//Import using require for the following: query.js (local), inquirer
const inquirer = require('inquirer');
const databaseQuery = require('./db/query');
const db = new databaseQuery();//create an instance of class databaseQuery named db

function init() {
  options();
} init();

function options() {
  //Prompt user to select an option from the application menu
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
      }, 
      {
        name: "Quit",
        value: 9,
      }
    ]
    },    
  ])
  //for a resolved promise, pass in the answers (object) given by prompt
  .then((answers) => {
    console.log(answers.option);

    response(answers.option);
    
  })
  //for a rejected promise, output an error
  .catch((error) => console.error(error));
}

function response(selection) {
  if(selection===1){
    db.viewDepartments();
    options();
  } else if (selection===2) {

  } else if (selection===3) {
    
  } else if (selection===4) {
    
  } else if (selection===5) {
    
  } else if (selection===6) {
    
  } else if (selection===7) {
    
  } else if (selection===8) {
    
  } else if (selection===9) {
    return;
  }
}