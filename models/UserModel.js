var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    displayName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
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
        groupSize: Number,
        about: String,
        photos: [String]
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
