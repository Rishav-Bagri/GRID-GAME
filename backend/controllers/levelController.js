const Level = require('../models/Level');

exports.getLevels = async (req, res) => {
    const levels = await Level.find();
    res.json(levels);
};

exports.getLevelById = async (req, res) => {
    const level = await Level.findById(req.params.id);
    if (!level) return res.status(404).json({ message: 'Level not found' });
    res.json(level);
};

exports.getLevelByNumber = async (req, res) => {
    const levelNumber = parseInt(req.params.levelNumber);
    const level = await Level.findOne({ levelNumber });
    if (!level) return res.status(404).json({ message: 'Level not found' });
    res.json(level);
};
