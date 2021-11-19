const express = require('express');
const controller = require('../controllers/gallery');

const router = express.Router();
router.route('').get(controller.index);

module.exports = router