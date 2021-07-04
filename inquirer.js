//requiring the inquier npm package
const inquirer = require('inquirer');
const departmentdbLogic = require('./routes/apiRoutes/departmentDbLogic')



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
        if (answer.companyChoice === 'view all departments') {
            functionhere();
        }
        else if (answer.companyChoice === 'view all roles') {
            functionhere();
        }
        else if (answer.companyChoice === 'view all employees') {
            functionhere();
        }
        else if (answer.companyChoice === 'add a department') {
            addDepartment();
        }
        else if (answer.companyChoice === 'delete a department') {
            deleteDepartment();
        }
        else if (answer.companyChoice === 'add a role') {
            addRole();
        }
        else if (answer.companyChoice === 'add an employee') {
            addEmployee();
        }
        else if (answer.companyChoice === 'update an employee role') {
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
      return departmentdbLogic.addDepartment(answer.departmentName)
        
      })
      .then(()=> chooseOption());
    
  };
  const deleteDepartment = () => {
    console.log(`
  =================
  Delete a Department
  =================
  `);

    return inquirer.prompt([
      {
        type: 'input',
        name: 'departmentId',
        message: 'What is the id of the department? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter an id!');
            return false;
          }
        }
      }
    ])
    .then(answer => {
      return departmentdbLogic.deleteDepartment(answer.departmentId)
        
      })
      .then(()=> chooseOption());
    
  };

  chooseOption();