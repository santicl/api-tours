const express = require('express');

const router = express.Router();
const { getTours, createTour, getTour, updateTour, deleteTour } = require('../controllers/tours');

router.get('/', getTours);
router.post('/', createTour);

module.exports = router;