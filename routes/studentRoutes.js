const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students');
const { handleErrors, saveStudent } = require('../middleware/validate');

router.get('/',  handleErrors(studentsController.getAllStudents));
router.get('/:id',  handleErrors(studentsController.getStudentById));
router.post('/',  saveStudent, handleErrors(studentsController.createStudent));
router.put('/:id',  saveStudent, handleErrors(studentsController.updateStudent));
router.delete('/:id', handleErrors(studentsController.deleteStudent));

module.exports = router;
