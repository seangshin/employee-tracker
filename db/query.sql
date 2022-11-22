SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

SELECT roles.id AS id, roles.title AS title, roles.salary AS salary, department.name AS department
FROM roles
JOIN department ON roles.department_id = department.id;