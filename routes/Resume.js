const express = require('express');
const multer = require('multer');
const path = require('path');
const router=express.Router();
const Resume=require('../models/resume');
// Multer configuration
const storage = multer.memoryStorage();

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // Limit file size to 20MB
  fileFilter: function(req, file, cb) {
    const filetypes = /pdf/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
      return cb(null, true);
    }
    cb('Error: Only PDF files are allowed.');
  }
}).single('pdf');

// Upload route
router.post('/', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send(err);
    } else if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Handle file upload to MongoDB Atlas
    try {
      const fileData = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
        filename: req.file.originalname
      };
      const savedFile = await Resume.create(fileData);
      console.log('File uploaded successfully:', savedFile);
      res.send('File uploaded successfully.');
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).send('Error uploading file.');
    }
  });
});

module.exports=router