const express=require('express');
const router=express.Router();
const Service=require('../../models/Services');

router.post('/', async (req,res) =>{
    const {description,username}=req.body;
    const postDoc = await Service.create({
        username,
        description,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {description,username}=req.body;
    const postDoc = await Service.findById(username).updateOne({
        description,
    });
    res.json(postDoc);
});

module.exports=router;