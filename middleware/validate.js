const validator = require('../helpers/validate');

const saveStudent = (req, res, next) => {
  const validationRule = {
    first_name: 'required|string',
    last_name: 'required|string',
    email: 'required|email',
    age: 'required|number',
    major: 'required|string',
    enrollment_year: 'required|number',
    is_active: 'required|boolean'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveTeacher = (req, res, next) => {
  const validationRule = {
    first_name: 'required|string',
    last_name: 'required|string',
    email: 'required|email',
    department: 'required|string',
    hire_date: 'required|date',
    is_tenured: 'required|boolean',
    courses: 'required|array'
  };
};


const  handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

module.exports = {
  saveStudent,
  saveTeacher,
  handleErrors
};