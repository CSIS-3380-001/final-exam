const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    let DB_URI = process.env.DB_URI || "mongodb://127.0.0.1:27017/BookList?retryWrites=true&w=majority";
    await mongoose.connect( DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

  } catch (error) {
    console.error('Failed to connect to theeee MongoDB:', error);

    // Handle the error
    throw new Error(error);
  }
};

module.exports = connectDB;


