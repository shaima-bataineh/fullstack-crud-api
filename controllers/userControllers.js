const User = require('../models/User'); // import the User model from the models directory

// create user
const createUser = async (req, res) => {
    try {

        if (!req.body.name || !req.body.email) {

            return res.status(400).json({
                message: "Name and Email are required"
            });
        }
        
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email
        });
    

        res.status(201).json({
            message: "User Created Successfully",
            user: newUser
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//get all users 
const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            message: error.message
            });
        }
    };

//get user by id
const getUserById = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
            });
    }
    };
// update user
const updateUser = async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
             {
                name: req.body.name,
                email: req.body.email
             },

             {
                new: true
             }
            );

        if (!updateUser) {

            return res.status(404).json({
                message: "User not found"
                });
        }

        res.status(200).json({
            message: "User Updated Successfully",
            user: updateUser
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
             });
    }
};
             
// delete user
const deleteUser = async (req, res) => {
    
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!deleteUser) {

            return res.status(404).json({
                message: "User not found"
            
            });

        }

        res.status(200).json({

            message: "User Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
                });

    }
};

module.exports = { // export all the controller functions as an object
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};

