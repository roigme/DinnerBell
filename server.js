const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");
const User = require("./models/UserModel.js");
mongoose.connect("mongodb://localhost/dinnerbell_data", { useNewUrlParser: true });

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/users", function(req, res) {
  User.find({}, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.post("/api/submit", function(req, res) {
  // Create a new user using req.body
  User.create(req.body)
    .then(function() {
      res.json();
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
