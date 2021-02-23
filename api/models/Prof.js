const mongoose = require('mongoose');

const ProfSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  college: {
    type: String,
    enum: ['BAGCED', 'CCS', 'COL', 'CLA', 'COS', 'GCOE', 'RVRCOB', 'SOE'],
    required: true
  },
  courses: { type: String, max: 200 },
  rating: { type: Number, max: 5, min: 1 }
});

module.exports = mongoose.model('prof', ProfSchema);
