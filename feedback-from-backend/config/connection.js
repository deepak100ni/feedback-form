const mongoose = require('mongoose');

const { DB_NAME, PORT } = process.env;

const URL = `mongodb://localhost:27017/${DB_NAME}`;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);

    console.log(`Connected to database\nDB: ${DB_NAME}\nPORT: ${PORT}`);
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
  }
};

connectDB();
