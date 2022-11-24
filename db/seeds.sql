INSERT INTO department (name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Human Resources"),
       ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 9, 1),
       ("Lead Engineer", 9, 1),
       ("Account Manager", 6, 3),
       ("Accountant", 5, 3),
       ("Lawyer", 8, 5),
       ("Salesperson", 5, 2),
       ("Sales Lead", 6, 2 ),
       ("Logistics", 4, 4);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 2, NULL),
       ("Mike", "Chan", 1, 1),
       ("Bill", "Rodriguez", 3, NULL),
       ("Kevin", "Tupik", 5, NULL),
       ("Sarah", "Allen", 6, 3);