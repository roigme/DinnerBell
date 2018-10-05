const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HostSchema = new Schema({
        maxGroup: Number,
        foodType: String,
        About: String,
        Photos: [String]
});

const Host = mongoose.model("Host", HostSchema);

module.exports = Host;
