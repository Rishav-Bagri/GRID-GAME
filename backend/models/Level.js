const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
    levelNumber: Number,
    layout: Array
});

module.exports = mongoose.model('Level', LevelSchema);
