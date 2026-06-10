// This file contains all user routes
const express = require('express'); // import the express module
const router = express.Router(); // create an instance of the Express Router


const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userControllers'); // import all the controller functions from the userControllers file

// define the routes and associate them with the corresponding controller functions

router.post("/", createUser); 

router.get("/", getUsers);

router.get("/:id", getUserById); 

router.put("/:id", updateUser); 

router.delete("/:id", deleteUser); 

module.exports = router; // export the router to be used in the main app file