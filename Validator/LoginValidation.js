// validators/userValidator.js
const {  check } = require('express-validator');
const { formValidation } = require('./forms');

const Validator = {
 registerValidator : [

  check('email')
    .isEmail().withMessage('Invalid email address'),

  check('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

    formValidation
]}

module.exports = {
  Validator
};
