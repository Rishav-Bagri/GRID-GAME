const GameStats = require('../models/GameStats');

exports.saveStats = async (req, res) => {
  const { userId, win, steps } = req.body;
  try {
    const stat = new GameStats({ userId, win, steps });
    await stat.save();
    res.status(201).json({ message: "Stats saved", stat });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStats = async (req, res) => {
  try {
    const stats = await GameStats.find({ userId: req.params.userId });
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
