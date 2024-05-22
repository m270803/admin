const express=require('express');
const router=express.Router();
const Hero=require('../../models/Hero');

router.post('/', async (req,res) =>{
    const {firstname}=req.body;
    const postDoc = await Hero.updateOne({
        firstname,
    });
    res.json(postDoc);
});

module.exports=router;