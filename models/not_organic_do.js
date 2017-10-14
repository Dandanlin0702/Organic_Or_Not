const mongoose = require("mongoose");

// Schema of items that cannot be dropped off
const NotOrganicDOSchema = new mongoose.Schema({
  category_tags: String
});
