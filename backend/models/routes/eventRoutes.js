const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/event', authMiddleware, eventController.createEvent); // Admin only
router.get('/events', eventController.getAllEvents);

module.exports = router;
