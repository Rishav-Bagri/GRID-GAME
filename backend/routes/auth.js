const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
router.get('/test', (req, res) => {
  res.send('Login route working');
});
