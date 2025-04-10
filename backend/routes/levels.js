const express = require('express');
const router = express.Router();
const { getLevels, getLevelById, getLevelByNumber} = require('../controllers/levelController');

router.get('/levels', getLevels);
router.get('/levels/:id', getLevelById);
router.get('/levels/number/:levelNumber', getLevelByNumber);
module.exports = router;
