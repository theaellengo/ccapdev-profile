const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

module.exports = connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected.');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
