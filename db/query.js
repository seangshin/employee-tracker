//import and require mysql2 package
const mysql = require('mysql2');

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
    viewDepartments() {
        db.query('SELECT * FROM department', (err, result) => err ? console.log(err) : console.log(result) );
    }
}

module.exports = databaseQuery;