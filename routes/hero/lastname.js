const express=require('express');
const router=express.Router();
const Hero=require('../../models/Hero');

router.post('/', async (req,res) =>{
    const {lastname}=req.body;
    const postDoc = await Hero.updateOne({
        lastname,
    });
    res.json(postDoc);
});

module.exports=router;