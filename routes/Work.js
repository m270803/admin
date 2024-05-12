const express=require('express');
const router=express.Router();
const Work=require('../models/Work');

router.post('/', async (req,res) =>{
        const {projects}=req.body;
        const postDoc = await Work.create({
            projects:projects,
        });
        res.json(postDoc);
  });

  module.exports=router;