const mongoose = require('mongoose');
const config = require('./config');

mongoose
  .connect(config.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
mongoose.Promise = global.Promise;

// Get current connected Database
const database = mongoose.connection;

// Notify on error or success
database.on('error', console.error.bind(console, 'Connection error: '));
database.once('open', () => console.log('Connected to the Database!'));

module.exports = {
    User: require("../models/userModel")
};
