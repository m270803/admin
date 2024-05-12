const express=require('express');
const router=express.Router();
const Testimonials=require('../models/Testimonials');

router.post('/', async (req,res) =>{
        const {author,company,position,testimonial}=req.body;
        const postDoc = await Testimonials.create({
            author ,
            company , 
            position ,
            testimonial,
        });
        res.json(postDoc);
  });

  module.exports=router;