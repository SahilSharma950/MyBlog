// db/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);

  }
};

module.exports = connectDB;
