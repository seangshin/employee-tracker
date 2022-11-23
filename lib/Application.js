//Import using require for the following: query.js (local), inquirer
const inquirer = require('inquirer');
const Query = require('./Query');
const db = new Query();//create an instance of class databaseQuery named db

class Application {

  run() {
    this.options();
  }

  async options() {
    const { option } = await inquirer.prompt([
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
    ]);

    await this.response(option);

    if (option != 9) {
      setTimeout(() => {
        this.options();
      }, 1000);
    } else {
      this.quit();
    }
  }

  async response(selection) {
    let result = null;

    if(selection===1){
      result = await db.viewDepartments();
      console.table(result);
    } else if (selection===2) {
      result = await db.viewRoles();
      console.table(result);
    } else if (selection===3) {
      result = await db.viewEmployees();
      console.table(result);
    } else if (selection===4) {
      let { department } = await inquirer.prompt([
        {
          type: "input",
          message: "What is the name of the department?",
          name: "department",
        },
      ]);
      db.addDepartment(department);
    } else if (selection===5) {
      let departments = await db.viewDepartments();
      
      departments = departments.map(department => {
        department.value = department.id;
        return department;
      });
      
      const { role, salary, department } = await inquirer.prompt([
        {
          type: "input",
          message: "What is the name of the role?",
          name: "role",
        },
        {
          type: "input",
          message: "What is the salary of the role?",
          name: "salary",
        },
        {
          type: "list",
          message: "Which department does the role belong to?",
          name: "department",
          choices: departments
        },
      ]);
      db.addRole(role, salary, department);
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