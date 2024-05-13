const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String,
  filename: String
});

const Resume = mongoose.model('File', fileSchema);

module.exports = Resume;
