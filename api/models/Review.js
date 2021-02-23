const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  prof: { type: Schema.Types.ObjectId, ref: 'prof' },
  author: { type: Schema.Types.ObjectId, ref: 'user' },
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

module.exports = mongoose.model('review', ReviewSchema);
