//import and require mysql2 and console.table packages
const mysql = require('mysql2');
const cTable = require('console.table');

//create connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'admin',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

  //class constructor
class Query {

    //method to display the department table within the database company_db
    viewDepartments() {
      db.promise().query('SELECT * FROM department')
        .then((result) => {
          console.table(result[0]);
        })
        .catch((err) => console.log(err));
    }

    //method to view all roles (incl. department) within the database company_db
    viewRoles() {
      db.promise().query('SELECT roles.id AS id, roles.title AS title, roles.salary AS salary, department.name AS department FROM roles JOIN department ON roles.department_id = department.id;')
      .then((result) => {
        console.table(result[0]);
      })
      .catch((err) => console.log(err));
    }

    //method to view all employees (incl. department & roles) within the database company_db
    viewEmployees() {
      db.promise().query('SELECT e.id AS id, e.first_name AS first_name, e.last_name AS last_name, roles.title AS title, department.name AS department, roles.salary AS salary, m.first_name AS manager FROM employee e JOIN roles ON e.role_id = roles.id JOIN department ON roles.department_id = department.id LEFT JOIN employee m ON m.id = e.manager_id;')
      .then((result) => {
        console.table(result[0]);
      })
      .catch((err) => console.log(err));
    }

    //method to add a department into the department table within the database company_db
    addDepartment(input) {
      const sql = `INSERT INTO department (name) VALUES (?)`;
      const params = input;
  
      db.query(sql, params, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          this.viewDepartments();
        }
      });
    }

    //method to add a role into the role table within the database company_db
    addRole(input) {
      const sql = `INSERT INTO roles (title) VALUES (?)`;
      const params = input;
  
      db.query(sql, params, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          this.viewRoles();
        }
      });
    }
}

module.exports = Query;