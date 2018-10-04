var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HostSchema = new Schema({
        maxGroup: Number,
        foodType: String,
        About: String,
        Photos: [String]
});

var Host = mongoose.model("Host", HostSchema);

module.exports = Host;
