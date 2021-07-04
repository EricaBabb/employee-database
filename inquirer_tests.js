//requiring the inquier npm package
const inquirer = require('inquirer');

//This inquires about what user wants to do
const promptManager = () => {
    return inquirer.prompt([
      {
          //Type: input will allow text; name acts as the key to the actual input value; the message is what comes up as the actual prompt for users
        type: 'input',
        name: 'managerName',
        message: 'What is the Team Managers name? (Required)',
        //validate is a Boolean
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the Manager name!');
          return false;
        }
      }
    },
      {
        type: 'number',
        name: 'managerId',
        message: 'Enter the Team Manager employee ID (Required)',
        validate: managerInput => {
          if (managerInput) {
            return true;
          } else {
            console.log('Please enter the Team Manager employee ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter the Team Manager email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter the Team Manager email!');
            return false;
          }
        }
      },
      {
        type: 'number',
        name: 'managerOffice',
        message: 'Enter the Team Manager office number (Required)',
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Please enter the Team Manager office number!');
            return false;
          }
        }
      }
    ]) .then(answer => {
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOffice)
        team.push(manager)
        chooseType()
    })
  };

  const chooseType = () => {
    console.log(`
    ==================
    Employee Database
    ==================
    `);
    return inquirer.prompt([{
        type: 'list',
        name: 'employeeChoice',
        message: 'What employee type do you want to fill out?',
        choices: ['Engineer', 'Intern', 'Done']
    }]) .then(answer => {
        if (answer.employeeChoice === 'Engineer') {
            makeEngineer();
        }
        else if (answer.employeeChoice === 'Intern') {
            makeIntern();
        }

        else {
            createHTML()
            .then(pageHTML => {
                return writeFile(pageHTML);
              })
              .then(writeFileResponse => {
                console.log(writeFileResponse);
                return copyFile();
              })
              .then(copyFileResponse => {
                console.log(copyFileResponse);
              })
              .catch(err => {
                console.log(err);
              });
            // console.log(team.length)
            // generateHtml()
        }
        
    })
  }
  //pick which type
  
//This inquires about employees
  const makeEngineer = () => {
    console.log(`
  =================
  Add an Engineer
  =================
  `);

    return inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of your engineer? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name for the engineer employee!');
            return false;
          }
        }
      },
      {
        type: 'number',
        name: 'engineerId',
        message: 'Provide an ID for your engineer employee (Required)',
        validate: engineerIdInput => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log('You need to enter an ID!');
            return false;
          }
        }
       },

      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Provide an ID for your engineer employee (Required)',
        validate: engineerEmailInput => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log('You need to enter an ID!');
            return false;
          }
        }
       },

      {
        type: 'input',
        name: 'engineerGithub',
        message: 'Provide a github account for your engineer employee (Required)',
        validate: engineerGithubInput => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log('You need to enter a github account!');
            return false;
          }
        }
      }
    ])
    .then(answer => {
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub)
        team.push(engineer)
        chooseType()
      });
    
  };


  const makeIntern = () => {
    console.log(`
  =================
  Add an Intern
  =================
  `);

    return inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'What is the name of your intern? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name for the intern employee!');
            return false;
          }
        }
      },
      {
        type: 'number',
        name: 'internId',
        message: 'Provide an ID for your intern employee (Required)',
        validate: internIdInput => {
          if (internIdInput) {
            return true;
          } else {
            console.log('You need to enter an ID!');
            return false;
          }
        }
       },

      {
        type: 'input',
        name: 'internEmail',
        message: 'Provide an ID for your intern employee (Required)',
        validate: internEmailInput => {
          if (internEmailInput) {
            return true;
          } else {
            console.log('You need to enter an ID!');
            return false;
          }
        }
       },

      {
        type: 'input',
        name: 'internSchool',
        message: 'Provide a school for your intern employee (Required)',
        validate: internSchoolInput => {
          if (internSchoolInput) {
            return true;
          } else {
            console.log('You need to enter a school!');
            return false;
          }
        }
      }
    ])
    .then(answer => {
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool)
        team.push(intern)
        chooseType()
      });
    
  };
//This calls the user prompt function and chains the answers from it together with the answers from the project prompt function
promptManager();

const createHTML = () => {
 return generateHtml(team);
}

const teamLength =  (team.length)


