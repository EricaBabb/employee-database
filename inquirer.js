//requiring the inquier npm package
const inquirer = require('inquirer');

company = []

  const chooseOption = () => {
    console.log(`
    ==================
    Employee Database
    ==================
    `);
    return inquirer.prompt([{
        type: 'list',
        name: 'companyChoice',
        message: 'What would you like to do?',
        choices: [ 'view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit']
    }]) .then(answer => {
        if (answer.employeeChoice === 'view all departments') {
            functionhere();
        }
        else if (answer.employeeChoice === 'view all roles') {
            functionhere();
        }
        else if (answer.employeeChoice === 'view all employees') {
            functionhere();
        }
        else if (answer.employeeChoice === 'add a department') {
            addDepartment();
        }
        else if (answer.employeeChoice === 'add a role') {
            addRole();
        }
        else if (answer.employeeChoice === 'add an employee') {
            addEmployee();
        }
        else if (answer.employeeChoice === 'update an employee role') {
            updateEmployee();
        }
        else {
            console.log('Goodbye!')
        }
        
    });
  };

  const addDepartment = () => {
    console.log(`
  =================
  Add a Department
  =================
  `);

    return inquirer.prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name!');
            return false;
          }
        }
      }
    ])
    .then(answer => {
        const department = new Department (answer.departmentName)
        company.push(department)
        chooseType()
      });
    
  };