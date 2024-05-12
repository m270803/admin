const express=require('express');
const router=express.Router();
const About=require('../models/About');

router.post('/', async (req,res) =>{
        const {bio,skills,services,achievements/*resume */}=req.body;
        const postDoc = await About.create({
            bio,
            skills,
            services,
            achievements,
            //resume
        });
        res.json(postDoc);
  });

  module.exports=router;