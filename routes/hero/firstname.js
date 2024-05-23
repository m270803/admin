const express=require('express');
const router=express.Router();
const Hero=require('../../models/Hero');

router.post('/', async (req,res) =>{
    const {firstname}=req.body;
    const postDoc = await Hero.create({
        username,
        firstname,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {firstname,username}=req.body;
    const postDoc = await Hero.findById(username).updateOne({
        firstname,
    });
    res.json(postDoc);
});

module.exports=router;