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
       
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Sean", "Shin", 2),
       ("first", "last", 8),
       ("Bill", "Nye", 1);