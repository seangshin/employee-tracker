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
        message: "What would you like to do?",
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

        this.response(answers.option);

        if (answers.option != 9) {
          setTimeout(() => {
            this.options();
          }, 1000);
        } else {
          this.quit();
        }
        
      })
      //for a rejected promise, output an error
      .catch((error) => console.error(error));
  }

  response(selection) {
    if(selection===1){
      db.viewDepartments();
    } else if (selection===2) {
      db.viewRoles();
    } else if (selection===3) {
      
    } else if (selection===4) {
      
    } else if (selection===5) {
      
    } else if (selection===6) {
      
    } else if (selection===7) {
      
    } else if (selection===8) {
      
    }
  }

  quit() {
    console.log('\nGoodbye!');
    process.exit(0);
  }
}

module.exports = Application;