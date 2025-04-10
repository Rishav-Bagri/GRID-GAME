const express = require('express');
const router = express.Router();
const { saveStats, getStats } = require('../controllers/statsController');

router.post('/stats', saveStats);
router.get('/stats/:userId', getStats);

module.exports = router;
