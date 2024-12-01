const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students');
const { handleErrors, saveStudent } = require('../middleware/validate');
const isAuthenticated = require('../middleware/authenticate');

router.get('/', handleErrors(studentsController.getAllStudents));
router.get('/:id', isAuthenticated, handleErrors(studentsController.getStudentById));
router.post('/', isAuthenticated, saveStudent, handleErrors(studentsController.createStudent));
router.put('/:id', isAuthenticated, saveStudent, handleErrors(studentsController.updateStudent));
router.delete('/:id', isAuthenticated, handleErrors(studentsController.deleteStudent));

module.exports = router;
