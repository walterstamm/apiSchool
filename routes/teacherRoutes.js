const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachers');
const { handleErrors, saveTeacher } = require('../middleware/validate');

router.get('/', handleErrors(teachersController.getAllTeachers));
router.get('/:id', handleErrors(teachersController.getTeacherById));
router.post('/', saveTeacher, handleErrors(teachersController.createTeacher));
router.put('/:id', saveTeacher, handleErrors(teachersController.updateTeacher));
router.delete('/:id', handleErrors(teachersController.deleteTeacher));

module.exports = router;

