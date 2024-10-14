const Event = require('C:/Users/DELL/OneDrive/Desktop/university/Geekathon/Geekathon/backend/models/models/event');

exports.createEvent = async (req, res) => {
  const { title, description, date, category } = req.body;

  try {
    const newEvent = new Event({
      title,
      description,
      date,
      category,
      createdBy: req.userId
    });

    const event = await newEvent.save();
    res.status(201).json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllEvents = async (req, res) => {
    try {
      const events = await Event.find().populate('createdBy', 'name email');
      res.json(events);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  