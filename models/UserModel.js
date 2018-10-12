var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    displayName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        default: "Not"
    },
    lastName: {
        type: String,
        default: "Available"
    },
    city: {
        type: String,
        default: "Richmond"
    },
    state: {
        type: String,
        default: "Virginia"
    },
    favoriteFoods: {
        type: [String]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    hostProfile: {
        type: Schema.Types.ObjectId,
        ref: 'Host'
    },
    dinerProfile: {
        groupSize: {
            type: "Number",
            default: 1
        },
        about: String,
        photos: [String]
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
