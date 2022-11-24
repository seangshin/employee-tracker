//Import using require for the following: query.js (local), inquirer
const inquirer = require('inquirer');
const Query = require('./query');
const db = new Query();//create an instance of class databaseQuery named db

class Application {
  //starts the application
  run() {
    this.options();
  }
  //shows the option menu
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
            name: "Quit",
            value: 8,
          }
        ]
      },  
    ]);

    await this.response(option);

    if (option != 8) {
      setTimeout(() => {
        this.options();
      }, 1000);
    } else {
      this.quit();
    }
  }
  //handles the responses based on the user's input
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
      
      //map array method used to add value as a property to be used in inquirer
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
      let roles = await db.viewRoles();
      let managers = await db.viewEmployees();
      
      //map array method used to create an array with only value and title properties to be used in inquirer
      roles = roles.map(role => {
        const newRoles = {};
        newRoles.value = role.id;
        newRoles.name =role.title;
        return newRoles;
      });
      
      //filter array method used to return managers
      managers = managers.filter(m => {
        return m.manager==null;
      })
      
      //map array method to add an id and name to the manager
      managers = managers.map(m => {
        const newManagers = {};

        newManagers.value = m.id;
        newManagers.name = m.first_name;
        return newManagers;
      });
      
      //array push method to add an option to not add manager
      managers.push({value: managers.length+1, name: "None"})
      
      const { first_name, last_name, role, manager } = await inquirer.prompt([
        {
          type: "input",
          message: "What is the employee's first name?",
          name: "first_name",
        },
        {
          type: "input",
          message: "What is the employee's last name?",
          name: "last_name",
        },
        {
          type: "list",
          message: "What is the employee's role?",
          name: "role",
          choices: roles
        },
        {
          type: "list",
          message: "Which department does the role belong to?",
          name: "manager",
          choices: managers
        },
      ]);

      //check if no manager was selected
      let verifiedManager;
      if(manager==managers.length) {
        verifiedManager='NULL';
      } else {
        verifiedManager=manager;
      }

      db.addEmployee(first_name, last_name, role, verifiedManager);
    } else if (selection===7) {
      let employees = await db.viewEmployees();
      let roles = await db.viewRoles();
      
      employees = employees.map(employee => {
        const newEmployees = {};
        newEmployees.value = employee.id;
        newEmployees.name = `${employee.first_name} ${employee.last_name}`;
        return newEmployees;
      });

      roles = roles.map(role => {
        const newRoles = {};
        newRoles.value = role.id;
        newRoles.name = role.title;
        return newRoles;
      });

      const { employee, role } = await inquirer.prompt([
        {
          type: "list",
          message: "Which employee do you want to update?",
          name: "employee",
          choices: employees
        },
        {
          type: "list",
          message: "Which role do you want to assign to the selected employee?",
          name: "role",
          choices: roles
        },
      ]);
      db.updateEmployee(employee, role);
    }
  }
  //ends the application
  quit() {
    console.log('\nGoodbye!');
    process.exit(0);
  }
}

module.exports = Application;