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
        required: "Email is Required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    hostProfiles: [{ type: Schema.Types.ObjectId, ref: 'Host' }],
    dinerProfile: {
        groupSize: Number,
        About: String,
        Photos: [String]
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
