const express = require('express');
const router = express.Router();
const upload = require('../helpers/handlerStorage');
const { createTour } = require('../controllers/storage');


router.post('/', upload.single("myfile"), createTour)

module.exports = router;