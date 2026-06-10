const mongoose = require('mongoose'); // import the mongoose module

const connectDB = async () => {
    
    try {
        await mongoose.connect("mongodb://localhost:27017/usersDB"); 
        console.log("MongoDB connected");

    } catch (error) {

        console.log(error.message);

        process.exit(1);
    }
};

module.exports = connectDB;