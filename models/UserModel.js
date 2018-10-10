var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: {
        type: String,
    },
    displayName: {
        type: String
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    hostProfiles: { type: Schema.Types.ObjectId, ref: 'Host' },
    dinerProfile: {
        groupSize: Number,
        About: String,
        Photos: [String]
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
