const mongoose = require('mongoose');

const GameStatsSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    win: Boolean,
    steps: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GameStats', GameStatsSchema);
