const db = require('../../db/connection');

// Get all the roles
readRole = () => {
  const sql = `SELECT * FROM role`;

  return db.query(sql)
}

// Create a new role
addRole = (title, salary, department_id) => {
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;

  return db.query(sql, [title, salary, department_id]);
}

// Delete a role
deleteRole = (id) => {
  const sql = `DELETE FROM role WHERE id = ?`;

  return db.query(sql, id )
}

module.exports = {
  readRole, addRole, deleteRole
}