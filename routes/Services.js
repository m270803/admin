const express=require('express');
const router=express.Router();
const Services=require('../models/Services');

router.post('/', async (req,res) =>{
        const {description,services}=req.body;
        const postDoc = await Services.create({
            description,
            services,
        });
        res.json(postDoc);
  });

  module.exports=router;