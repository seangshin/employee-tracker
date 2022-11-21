//Import using require for the following: query.js (local), inquirer
const inquirer = require('inquirer');
const Query = require('./Query');
const db = new Query();//create an instance of class databaseQuery named db

class Application {

  run() {
    this.options();
  }

  options() {
    //prompt user to select an option from the application menu
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
    
        this.response(answers.option);
        
      })
      //for a rejected promise, output an error
      .catch((error) => console.error(error));
  }

  response(selection) {
    if(selection===1){
      db.viewDepartments();
      this.options();
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
}

module.exports = Application;