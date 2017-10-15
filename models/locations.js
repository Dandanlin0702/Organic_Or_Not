const mongoose = require("mongoose");

// Schema of drop off locations
const DOLocationsSchema = new mongoose.Schema({
  name: String,
  address: String,
  borough: String,
  zip: [Number],
  open: String
});

module.exports = mongoose.model("Locations", DOLocationsSchema);
