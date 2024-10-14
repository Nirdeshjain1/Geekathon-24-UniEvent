const express = require('express');
const connectDB = require('./config/db'); // Relative path to your DB connection file
const dotenv = require('dotenv'); // Load dotenv package

// Load environment variables
dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes')); // Relative path to your user routes
app.use('/api/events', require('./routes/eventRoutes')); // Relative path to your event routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
