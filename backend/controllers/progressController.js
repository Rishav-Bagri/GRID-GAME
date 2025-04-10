const Progress = require('../models/Progress');

exports.saveProgress = async (req, res) => {
  const { userId, currentLevel, stepsTaken } = req.body;
  try {
    const progress = await Progress.findOneAndUpdate(
      { userId },
      { currentLevel, stepsTaken },
      { upsert: true, new: true }
    );
    res.status(201).json({ message: "Progress saved", progress });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.params.userId });
    if (!progress) return res.status(404).json({ message: "Progress not found" });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
