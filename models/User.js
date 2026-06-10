const mongoose = require('mongoose'); // import the mongoose module

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema); // create a Mongoose model named 'User' using the defined userSchema. This model will be used to interact with the 'users' collection in the MongoDB database, allowing us to perform CRUD operations on user documents.

module.exports = User; // export the User model so that it can be imported and used in other parts of the application, such as in route handlers or controllers where we need to perform database operations related to users.