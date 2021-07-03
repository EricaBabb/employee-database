INSERT INTO department
  (id, name)
VALUES
  (1, 'Front-end Development'),
  (2, 'Back-end Development'),
  (3, 'Marketing'),
  (4, 'Management');

INSERT INTO role
  (id, title, salary, department_id)
VALUES
  (1, 'Senior UI Director', 105000, 1),
  (2, 'Software Developer', 93000, 2),
  (3, 'Marketing Research Analyst', 77000, 3),
  (4, 'Manager', 100000, 4);

INSERT INTO employee
  (id, first_name, last_name, role_id, manager_id)
VALUES
  (1,'Jamie', 'Fraser', 1, 4),
  (2, 'Jackie', 'London', 2, 4),
  (2, 'Roberta', 'Bruce', 3, 4),
  (4, 'Gerald', 'Griffin', 4, 4);

--   How do I connect manager id??