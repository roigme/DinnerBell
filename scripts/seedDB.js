const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the Users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dinnerbell_data", 
  { useNewUrlParser: true }
);

const bookSeed = [
    {
        "displayName": "PatLehmann1",
        "email": "patlehmann1@gmail.com",
        "firstName": "Patrick",
        "lastName": "Lehmann",
        "city": "Fredericksburg",
        "state": "Virginia",
        "favoriteFoods": [
            "Barbeque",
            "Pizza",
            "Sushi",
            "Subs"
        ],
        "dinerProfile": {
            "groupSize": 4,
            "about": "We just want to get together and have good times with good people"
        }
    },
    {
        "displayName": "RoigME",
        "email": "RoigME@gmail.com",
        "firstName": "Matthew",
        "lastName": "Roig",
        "city": "Fredericksburg",
        "state": "Virginia",
        "favoriteFoods": [
            "Steak",
            "Seafood",
            "Tacos",
            "Hamburgers"
        ],
        "dinerProfile": {
            "groupSize": 7,
            "about": "We just a nice quiet place to watch the Redskins lose"
        }
    },
    {
        "displayName": "TimkoMo",
        "email": "MattyT@gmail.com",
        "firstName": "Matthew",
        "lastName": "Timko",
        "city": "Richmond",
        "state": "Virginia",
        "favoriteFoods": [
            "Chicken",
            "Pizza",
            "Sushi",
            "Indian"
        ],
        "dinerProfile": {
            "groupSize": 10,
            "about": "Looking for a place with good food and good people"
        }
    },
    {
        "displayName": "PeteLehmann",
        "email": "PeterLehmann@comcast.net",
        "firstName": "Peter",
        "lastName": "Lehmann",
        "city": "Richmond",
        "state": "Virginia",
        "favoriteFoods": [
            "Sushi",
            "Salads",
            "Barbeque",
            "Italian"
        ],
        "dinerProfile": {
            "groupSize": 2,
            "about": "Just Looking for a place to go with my wife"
        }
    }
        
    
    
    
    
];

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
