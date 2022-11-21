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
class databaseQuery {

    //method to display the department table within the database company_db
    viewDepartments() {
        db.query('SELECT * FROM department', (err, results) => err ? console.log(err) : console.table(results) );
    }
}

module.exports = databaseQuery;