// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const authRoutes = require('./routes/auth');
// const levelRoutes = require('./routes/levels');
// const progressRoutes = require('./routes/progress');
// const statsRoutes = require('./routes/stats');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

// app.use('/api', authRoutes);
// app.use('/api', levelRoutes);
// app.use('/api', progressRoutes);
// app.use('/api', statsRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// console.log("✅ Auth routes mounted");

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const authRoutes = require('./routes/auth');
const levelRoutes = require('./routes/levels');
const progressRoutes = require('./routes/progress');
const statsRoutes = require('./routes/stats');

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Frontend URL
  optionsSuccessStatus: 200
};
app.use(cors());

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', levelRoutes);
app.use('/api', progressRoutes);
app.use('/api', statsRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
