const express=require('express');
const router=express.Router();
const Hero=require('../../models/Hero');

router.post('/', async (req,res) =>{
    const {introduction,username}=req.body;
    const postDoc = await Hero.updateOne({
        username,
        introduction,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {introduction,username}=req.body;
    const postDoc = await Hero.findById(username).updateOne({
        introduction,
    });
    res.json(postDoc);
});

module.exports=router;