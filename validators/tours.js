const { check } = require('express-validator');

const validatorCreateTour = [
    check('name').exists().notEmpty()
];

module.exports = { validatorCreateTour };