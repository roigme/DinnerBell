const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HostSchema = new Schema({
        isHosting: Boolean,
        city: String,
        state: String,
        maxGroup: Number,
        foodType: String,
        about: String,
        photos: [String]
});

const Host = mongoose.model("Host", HostSchema);

module.exports = Host;
