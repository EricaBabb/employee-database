const db = require('../../db/connection');

// Get all the departments alphabetized
readDepartment = () => {
  const sql = `SELECT * FROM department`;

  return db.query(sql)
}

// Delete a department
deleteDepartment = (id) => {
  const sql = `DELETE FROM department WHERE id = ?`;

  return db.query(sql, id )
}

// Create a new department
addDepartment = (name) => {
  const sql = `INSERT INTO department (name) VALUES (?)`;

  return db.query(sql, name);
}

module.exports = {
  readDepartment, deleteDepartment, addDepartment
}