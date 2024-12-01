const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachers');
const { handleErrors, saveTeacher } = require('../middleware/validate');
const isAuthenticated = require('../middleware/authenticate');

router.get('/', handleErrors(teachersController.getAllTeachers));
router.get('/:id', isAuthenticated, handleErrors(teachersController.getTeacherById));
router.post('/', isAuthenticated, saveTeacher, handleErrors(teachersController.createTeacher));
router.put('/:id', isAuthenticated, saveTeacher, handleErrors(teachersController.updateTeacher));
router.delete('/:id', isAuthenticated, handleErrors(teachersController.deleteTeacher));

module.exports = router;

