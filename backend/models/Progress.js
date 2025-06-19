const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({

    userId: String,

    currentLevel: Number
});

module.exports = mongoose.model('Progress', ProgressSchema);
