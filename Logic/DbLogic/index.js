const express = require('express');
const router = express.Router();

router.use(require('./departmentDbLogic'));
router.use(require('./roleRoutes'));
router.use(require('./employeeRoutes'));

module.exports = router;