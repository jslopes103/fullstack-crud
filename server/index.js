// Importing external libs
// Express to start server
// BodyParser to enable use of UTF-8 and JSON on body already parsed
// Cors to enable security and middleware support to add BodyParser
// Mongoose is a driver to comunicate with MongoDB
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// Starting sever and enabling middlewares
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Tell mongoose to connect to this mongoDB url and use the new parser for URL
mongoose
  .connect("<MONGODB_URL>", { useNewUrlParser: true })
  .then(() => {
    // Just to console if connects successfully
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    // If there is any error, it will log and exit
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// Getting our routes and passing our server to bind the routes
require("./app/routes/person.route")(app);

// Make the server listen the port 9000 and log when finished
app.listen(9000, () => {
  console.log("Server is listening on port 9000");
});
