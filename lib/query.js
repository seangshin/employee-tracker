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
    async viewDepartments() {
      let sql = `SELECT * FROM department`;
      try {
        let results = await db.promise().query(sql);
        return results[0];
      } catch(error) {
        console.error(error);
      }
    }

    //method to view all roles (incl. department) within the database company_db
    async viewRoles() {
      let sql = `SELECT roles.id AS id, roles.title AS title, roles.salary AS salary, department.name AS department 
      FROM roles 
      JOIN department ON roles.department_id = department.id;`;
      try {
        let results = await db.promise().query(sql);
        return results[0];
      } catch(error) {
        console.error(error);
      }
    }

    //method to view all employees (incl. department & roles) within the database company_db
    async viewEmployees() {
      let sql = `SELECT e.id AS id, e.first_name AS first_name, e.last_name AS last_name, roles.title AS title, department.name AS department, roles.salary AS salary, m.first_name AS manager 
      FROM employee e 
      JOIN roles ON e.role_id = roles.id 
      JOIN department ON roles.department_id = department.id 
      LEFT JOIN employee m ON m.id = e.manager_id;`
      try {
        let results = await db.promise().query(sql);
        return results[0];
      } catch(error) {
        console.error(error);
      }
    }

    //method to add a department into the department table within the database company_db
    async addDepartment(input) {
      let sql = `INSERT INTO department (name) VALUES (?)`;
      let params = input;

      await db.promise().query(sql, params, (err, result) => {
        if(err) {
          console.log(err);
        }
      });
    }

    //method to add a role into the role table within the database company_db
    async addRole(role, salary, department) {
      let sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
  
      await db.promise().query(sql, [role, salary, department], (err, result) => {
        if (err) {
          console.log(err);
        }
      });
    }

    //method to add an employee into the employee table within the database company_db
    async addEmployee(first_name, last_name, role, manager) {
      let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
      if(manager=='NULL') {
        sql = `INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)`
        await db.promise().query(sql, [first_name, last_name, role, manager], (err, result) => {
          if (err) {
            console.log(err);
          }
        });
      } else {
        await db.promise().query(sql, [first_name, last_name, role, manager], (err, result) => {
          if (err) {
            console.log(err);
          }
        });
      }      
    }
}

module.exports = Query;