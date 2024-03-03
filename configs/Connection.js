const mongoose = require('mongoose');

const Connection = async () => {
  try {
    if (!process.env.MongoURL) {
      throw new Error('Missing environment variable: MongoURL');
    }

    const connection = await mongoose.connect(process.env.MongoURL);
    console.log(`Database connected successfully ${connection.connectionId}`);
    return connection; // Return the connection object
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
    throw error; // Re-throw the error for further handling
  }
};

module.exports = Connection;
