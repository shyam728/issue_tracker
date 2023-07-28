require('dotenv').config();
//require the library
const mongoose = require('mongoose');

// here we are using the MongoDB Url (i.e. Mondodb Atlas)
const db = "mongodb+srv://ajayagrawal728:Ajay123@cluster0.b4culdb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Successfully connected to the database');
}).catch((err)=> console.log('Failed to connect to the database', err));
 

// acquire connection (to check if its successful)
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// db.once('open', function () {
//   console.log('Connected to Database :: MongoDB');
// });

// module.exports = db;
