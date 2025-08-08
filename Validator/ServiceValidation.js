// validators/serviceValidator.js
const { check } = require('express-validator');
const { formValidation } = require('./forms');
const Category = require("../models/Category")
const Validator = {
  serviceValidator: [
    check('categoryId')
      .notEmpty().withMessage('Category ID is required')
      .isMongoId().withMessage('Invalid Category ID')
      .bail() // stop running further validators if previous failed
      .custom(async (value) => {
        const category = await Category.findById(value);
        if (!category) {
          return Promise.reject('Category not found');
        }
      }),
      
    check('serviceName')
      .notEmpty().withMessage('Service name is required')
      .isLength({ min: 3 }).withMessage('Service name must be at least 3 characters long'),

    check('type')
      .optional()
      .isIn(['Normal', 'VIP']).withMessage('Type must be either Normal or VIP'),

    check('price')
      .notEmpty().withMessage('Price is required')
      .isFloat({ min: 0 }).withMessage('Price must be a positive number'),

    formValidation
  ]
};

module.exports = {
  Validator
};
