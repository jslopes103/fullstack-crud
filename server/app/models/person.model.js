// Request mongoose to start our Schema document
const mongoose = require("mongoose");

// Creating the model of our schema to work with node
const PersonSchema = mongoose.Schema(
  {
    id: String,
    firstName: String,
    lastName: String,
    email: String,
  },
  {
    // timestamps as option to see when it was created and updated
    timestamps: true,
  }
);
// Exporting our model to use into our server
module.exports = mongoose.model("Person", PersonSchema);
