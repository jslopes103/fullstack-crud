const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.rx7qa.mongodb.net/fullstack-crud",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

require("./app/routes/person.route")(app);

app.listen(9000, () => {
  console.log("Server is listening on port 9000");
});
