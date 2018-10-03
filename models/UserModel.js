var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is Required"
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  profiles: {
    hostProfile: {
        hostId: Number,
        groupSize: Number,
        About: String,
        Photos: {
            photo1: String,
            photo2: String,
            photo3: String,
            photo4: String
        }
    },
    dinerProfile: {
        dinerId: Number,
        MaxGroup: Number,
        foodType: String,
        About: String,
        Photos: {
            photo1: String,
            photo2: String,
            photo3: String,
            photo4: String
        }
    }
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
