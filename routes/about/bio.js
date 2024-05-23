const express=require('express');
const router=express.Router();
const About=require('../../models/About');

router.post('/', async (req,res) =>{
    const {bio,username}=req.body;
    const postDoc = await About.updateOne({
        username,
        bio,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {bio,username}=req.body;
    const postDoc = await About.findById(username).updateOne({
        bio,
    });
    res.json(postDoc);
});

module.exports=router;