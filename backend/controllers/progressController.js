const Progress = require('../models/Progress');
const jwt = require('jsonwebtoken');

exports.saveProgress = async (req, res) => {
  const { currentLevel, stepsTaken } = req.body;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

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
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const progress = await Progress.findOne({ userId });
    if (!progress) return res.status(404).json({ message: "Progress not found" });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
