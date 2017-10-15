const mongoose = require("mongoose");

// Schema of items that cannot be dropped off
const OrganicDOSchema = new mongoose.Schema({
  category_tags: String
});

module.exports = mongoose.model("Organic", OrganicDOSchema);
