const db = require('../../db/connection');

// // Get all the departments alphabetized
// router.get('/department', (req, res) => {
//   const sql = `SELECT * FROM department ORDER BY name`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });




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
  addDepartment, deleteDepartment
  }