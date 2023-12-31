INSERT INTO departments (name) VALUES
  ('Engineering'),
  ('Sales'),
  ('Marketing'),
  ('Human Resources');

INSERT INTO roles (title, salary, department_id) VALUES
  ('Software Engineer', 150000, 1),
  ('Account Executive', 120000, 2),
  ('Marketing Manager', 100000, 3),
  ('Recruiter', 80000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, 1),
  ('Jane', 'Smith', 2, 1),
  ('Michael', 'Jones', 3, 1),
  ('Mike', 'Tyson', 4, 1);