const express=require('express');
const router=express.Router();
const Hero=require('../../models/Hero');

router.post('/', async (req,res) =>{
    const {lastname}=req.body;
    const postDoc = await Hero.create({
        username,
        lastname,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {lastname,username}=req.body;
    const postDoc = await Hero.findById(username).updateOne({
        lastname,
    });
    res.json(postDoc);
});

module.exports=router;