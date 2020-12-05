const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  companies: {
    type: [],
  },
});

module.exports = mongoose.model("users", userSchema);
