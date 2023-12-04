const mongoose = require('mongoose');
//fill your database name here

mongoose.connect(
  'mongodb+srv://klsakthi3344:klsakthi333@cluster0.b9ziqxt.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('error', console.error.bind('console', 'error'));

db.once('open', function () {
  console.log('welcome connect to database');
});

module.exports = db;
// process.env.MONGODB_URL || 'mongodb://localhost/crawling_db',
// Mongoose
// 'mongodb+srv://singh99vikas:Mongoose@cluster0.snh5a.mongodb.net/<crawling_db>?retryWrites=true&w=majority',
// // require mongoose
// const mongoose = require('mongoose');
// // connect to database and collection
// mongoose.connect('mongodb://127.0.0.1/Habit-Tracker');

// const db = mongoose.connection;

// // in case of any error in connection
// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// // tell us once connection with database was successful
// db.once('open', function(){
//     console.log('Connected to Database :: MongoDB');
// });

// // exporting and make available
// module.exports = db;

// const mongoose = require('mongoose');
// require('dotenv').config();

// async function connectToMongoDB()
// {
//     try {
//         await mongoose.connect("mongodb+srv://klsakthi333:<@Sakthi333>@cluster0.bc6vzgj.mongodb.net/");
//         console.log('database connected');
    
//     } catch (error) {
//         console.log('error occur in conecting to db',error);
//     }
// }
// connectToMongoDB();

