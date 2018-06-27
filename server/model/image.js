const mongoose = require('mongoose');

// define the Image model schema
const ImageSchema = new mongoose.Schema({
  name: String,
  img: { data: Buffer, contentType: String },
  dateUploaded: Date
});

module.exports = mongoose.model('Image', ImageSchema);
