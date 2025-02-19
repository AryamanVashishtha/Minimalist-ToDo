// require the library

const mongoose =require('mongoose');

//connect to the database

mongoose.connect('mongodb://127.0.0.1:27017/tododb',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
});

//acquire the connection to check if its succesful

const db = mongoose.connection;

//error

// db.on('error', function (err){
//     console.log(err.message);
// });
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));
//up and running then print the message
db.once('open', function(){

    console.log("Successfully connected to the database");

});

module.exports = db;


