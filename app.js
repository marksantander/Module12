const inquirer = require('inquirer');
const connection = require('./db');

const mainMenu = async () => {
const { choice } = await inquirer.prompt([
{
type: 'list',
name: 'choice',
message: 'What would you like to do?',
choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
},
]);

switch (choice) {
case 'View all departments':
await viewDepartments();
break;
case 'View all roles':
await viewRoles();
break;
case 'View all employees':
await viewEmployees();
break;
case 'Add a department':
await addDepartment();
break;
case 'Add a role':
await addRole();
break;
case 'Add an employee':
await addEmployee();
break;
case 'Update an employee role':
await updateEmployeeRole();
break;
default:
console.log('Invalid choice.');
}
};

const viewDepartments = async () => {
const query = 'SELECT * FROM departments';
const [results] = await connection.query(query);

console.table(results);
};

const viewRoles = async () => {
const query = 'SELECT roles.id, roles.title, roles.salary, departments.name AS department FROM roles INNER JOIN departments ON roles.department_id = departments.id';
const [results] = await connection.query(query);

console.table(results);
};

const viewEmployees = async () => {
const query = SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, employees.manager_id AS manager FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id;
const [results] = await connection.query(query);

console.table(results);
};

const addDepartment = async () => {
const { name } = await inquirer.prompt([
{
type: 'input',
name: 'name',
message: 'Enter the name of the department:',
},
]);

const query = 'INSERT INTO departments (name) VALUES (?)';
const [results] = await connection.query(query, [name]);

console.log('Department added');
};

const addRole = async () => {
const departments = await connection.query('SELECT * FROM departments');

const { title, salary, department_id } = await inquirer.prompt([
{
type: 'input',
name: 'title',
message: 'Enter title:',
},
{
type: 'number',
name: 'salary',
message: 'Enter salary:',
},
{
type: 'list',
name: 'department_id',
message: 'Select the department for the role:',
},
])};