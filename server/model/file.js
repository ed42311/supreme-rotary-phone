const mongoose = require('mongoose');

// define the File model schema
const FileSchema = new mongoose.Schema({
  name: String,
  file: { data: Buffer, contentType: String },
  dateUploaded: Date
});

module.exports = mongoose.model('File', FileSchema);
