const db = require('../../db/connection');

// Get all the employees
readEmployee = () => {
  const sql = `SELECT * FROM employee`;

  return db.query(sql)
}

// Create a new employee
addEmployee = (first_name, last_name, role_id, manager_id) => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;

  return db.query(sql, [first_name, last_name, role_id, manager_id]);
}
  
// Update an employee's role
updateEmployee = (role_id, id) => {
  const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;

  return db.query(sql, [role_id, id] )
}

// Delete an employee
deleteEmployee = (id) => {
  const sql = `DELETE FROM employee WHERE id = ?`;

  return db.query(sql, id )
}

module.exports = {
  readEmployee, addEmployee, updateEmployee, deleteEmployee
}