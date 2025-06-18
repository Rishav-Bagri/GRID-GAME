const express = require('express');
const { saveProgress, getProgress } = require('../controllers/progressController');

const router = express.Router();

router.post('/progress', saveProgress);
router.get('/progress', getProgress);

module.exports = router;