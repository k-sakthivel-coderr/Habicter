// require mongoose
const mongoose = require('mongoose');
// connect to database and collection
mongoose.connect('mongodb://127.0.0.1/Habit-Tracker');

const db = mongoose.connection;

// in case of any error in connection
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// tell us once connection with database was successful
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

// exporting and make available
module.exports = db;
