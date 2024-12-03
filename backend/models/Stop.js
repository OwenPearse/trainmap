// backend/models/Stop.js
const mongoose = require('mongoose');

const StopSchema = new mongoose.Schema({
  stop_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true }, // e.g., Train, Tram, Bus
  region: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }, // [lng, lat]
  },
  // Add other relevant fields as needed
}, { timestamps: true });

StopSchema.index({ location: '2dsphere' });

const Stop = mongoose.model('Stop', StopSchema);
module.exports = Stop;
