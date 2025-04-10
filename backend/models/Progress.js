const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    currentLevel: Number,
    stepsTaken: Number
});

module.exports = mongoose.model('Progress', ProgressSchema);
