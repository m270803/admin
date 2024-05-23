const express = require('express');
const multer = require('multer');
const router=express.Router();
const Resume=require('../../models/resume');
// Multer configuration
const upload = multer();

// Upload route
router.post('/', upload.single('pdf'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  //assigning values
  try {    
    const fileData = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
      filename: req.file.originalname
    };
    const{username}=res.body;
  //creating data entry
    await Resume.create(
      username,
      fileData,
    );
    console.log('File uploaded successfully:', fileData.filename);
    res.send('File uploaded successfully.');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file.');
  }
});

router.put('/', upload.single('pdf'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  //assigning values
  try {    
    const fileData = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
      filename: req.file.originalname
    };
    const{username}=res.body;
  //updateing data entry
    await Resume.findById(username).updateOne(fileData);
    console.log('File uploaded successfully:', fileData.filename);
    res.send('File uploaded successfully.');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file.');
  }
});

module.exports=router;