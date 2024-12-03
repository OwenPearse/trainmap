// backend/controllers/stopController.js
const Stop = require('../models/Stop');

// Fetch all stops with optional filtering
const getAllStops = async (req, res) => {
  const { regions } = req.query;
  try {
    let query = {};
    if (regions) {
      const regionArray = regions.split(',').map(region => region.trim());
      query.region = { $in: regionArray };
    }
    const stops = await Stop.find(query);
    res.json({ stops });
  } catch (error) {
    console.error('Error fetching stops:', error.message);
    res.status(500).json({ error: 'Failed to fetch stops.' });
  }
};

// Add more controller functions as needed (e.g., createStop, updateStop, deleteStop)

module.exports = {
  getAllStops,
  // export other functions
};
