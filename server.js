
const express = require('express'); // import the express module
const app = express(); // create instance of express magic is a server

const connectDB = require('./config/db'); // import the connectDB function from the db.js file located in the config directory
const userRoutes = require('./routes/userRoutes');

const productRoutes = require('./routes/productRoutes');

connectDB(); // call the connectDB function to establish a connection to the MongoDB database. This function is defined in the db.js file and is responsible for connecting to the database using Mongoose. By calling this function, we ensure that our server has a connection to the database before it starts handling any requests.

app.use(express.json()); // this line of code is a middleware function that allows the server to parse incoming JSON data in the request body. When a client sends a request with a JSON payload, this middleware will automatically parse the JSON and make it available in the req.body property of the request object. This is essential for handling API requests that send data in JSON format, allowing the server to easily access and work with the data sent by the client.
app.get('/',(req,res) => { // when user visite this route, run this code and send this response '/' this is the home page of server
    res.send('API is running'); // server returns response text 'API is running' to the user
});
app.use("/api/users", userRoutes); // this line of code is telling the Express application to use the userRoutes router for any requests that start with "/api/users". When a request is made to a route that matches "/api/users", the Express application will delegate the handling of that request to the userRoutes router, which is defined in the separate file "route/userRoutes.js". This allows for better organization and modularization of the code, as all user-related routes can be defined in one place (the userRoutes router) and then easily integrated into the main server file (server.js) using this middleware.

app.use("/api/products", productRoutes); // this line of code is telling the Express application to use the productRoutes router for any requests that start with "/api/products". When a request is made to a route that matches "/api/products", the Express application will delegate the handling of that request to the productRoutes router, which is defined in the separate file "route/productRoutes.js". This allows for better organization and modularization of the code, as all product-related routes can be defined in one place (the productRoutes router) and then easily integrated into the main server file (server.js) using this middleware.

const PORT = process.env.PORT || 5000; // this line of code is setting the port number for the server to listen on. It first checks if there is an environment variable named PORT defined (which is common in production environments), and if it exists, it uses that value. If the PORT environment variable is not defined, it defaults to 5000. This allows the server to be flexible and adaptable to different deployment environments.

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});