const query = require("./config/connection");

const inquirer = require('inquirer');

const options = [
  { name: 'View departments', value: 'viewDepartments' },
  { name: 'View roles', value: 'viewRoles' },
  { name: 'View employees', value: 'viewEmployees' },
  { name: 'Add a department', value: 'addDepartment' },
  { name: 'Add a role', value: 'addRole' },
  { name: 'Add an employee', value: 'addEmployee' },
  { name: 'Edit a department', value: 'editDepartment' },
  { name: 'Edit a role', value: 'editRole' },
  { name: 'Edit an employee', value: 'editEmployee' },
  { name: 'Delete a department', value: 'deleteDepartment' },
  { name: 'Delete a role', value: 'deleteRole' },
  { name: 'Delete an employee', value: 'deleteEmployee' },
  { name: 'Exit', value: 'exit' },
];

const prompt = inquirer.createPromptModule();

async function displayMenu() {
  const response = await prompt({
    type: 'list',
    name: 'option',
    message: 'What would you like to do?',
    choices: options,
  });

  switch (response.option) {
    case 'viewDepartments':
      await viewDepartments();
      break;
    case 'viewRoles':
      await viewRoles();
      break;
    case 'viewEmployees':
      await viewEmployees();
      break;
    case 'addDepartment':
      await addDepartment();
      break;
    case 'addRole':
      await addRole();
      break;
    case 'addEmployee':
      await addEmployee();
      break;
    case 'editDepartment':
      await editDepartment();
      break;
    case 'editRole':
      await editRole();
      break;
    case 'editEmployee':
      await editEmployee();
      break;
    case 'deleteDepartment':
      await deleteDepartment();
      break;
    case 'deleteRole':
      await deleteRole();
      break;
    case 'deleteEmployee':
      await deleteEmployee();
      break;
    case 'exit':
      process.exit();
      break;
  }
}
displayMenu();

class EmployeeTracker {
  constructor() {
    this.departments = [];
    this.roles = [];
    this.employees = [];
  }

  async getDepartments() {
    const results = await query('SELECT * FROM department');
    this.departments = results;
    return this.departments;
  }

  async getRoles() {
    const results = await query('SELECT * FROM role');
    this.roles = results;
    return this.roles;
  }

  async getEmployees() {
    const results = await query('SELECT * FROM employee');
    this.employees = results;
    return this.employees;
  }

  async addDepartment(name) {
    await query('INSERT INTO department (name) VALUES (?)', [name]);
  }

  async addRole(title, salary, departmentId) {
    await query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId])
  }
};
