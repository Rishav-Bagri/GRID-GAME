const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({

    userId: String,

    currentLevel: Number,
    stepsTaken: Number
});

module.exports = mongoose.model('Progress', ProgressSchema);
