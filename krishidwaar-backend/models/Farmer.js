const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  phone: { type: String },
  location: { type: String },
  profilePic: { type: String },
  password: { type: String }, // hashed
});

module.exports = mongoose.model('Farmer', FarmerSchema);
