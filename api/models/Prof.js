const mongoose = require('mongoose');

const ProfSchema = new mongoose.Schema({
  name: { type: String, required: true },
  idNum: { type: String, required: true, unique: true},
  college: {
    type: String,
    enum: ['BAGCED', 'CCS', 'COL', 'CLA', 'COS', 'GCOE', 'RVRCOB', 'SOE'],
    required: true
  },
  courses: { type: String, max: 200 },
  rating: { type: Number, max: 5, min: 0 }
});

module.exports = mongoose.model('prof', ProfSchema);
