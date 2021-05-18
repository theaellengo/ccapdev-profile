const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  idno: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user', required: true},
  avatar: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model('user', UserSchema);
