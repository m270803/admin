const express=require('express');
const router=express.Router();
const Contact=require('../models/contact');

router.post('/', async (req,res) =>{
        const {email,phone,address}=req.body;
        const postDoc = await Contact.create({
            email,
            phone,
            address,
        });
        res.json(postDoc);
  });

  module.exports=router;