const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  prof: { type: Number, required: true },
  author: { type: Number, required: true },
  comment: { type: String, required: true, max: 300 },
  rating: { type: Number, required: true, max: 5, min: 1 },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ['posted', 'reported'],
    default: 'posted',
    required: true
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
