const express=require('express');
const router=express.Router();
const About=require('../../models/About');

router.post('/', async (req,res) =>{
    const {acheivements,username}=req.body;
    const postDoc = await About.create({
        username,
        acheivements,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {acheivements,username}=req.body;
    const postDoc = await About.findById(username).updateOne({
        acheivements,
    });
    res.json(postDoc);
});

module.exports=router;