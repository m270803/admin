const express=require('express');
const router=express.Router();
const Contact=require('../../models/contact');

router.post('/', async (req,res) =>{
    const {instagram,username}=req.body;
    const postDoc = await Contact.create({
        username,
        instagram,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {instagram,username}=req.body;
    const postDoc = await Contact.findById(username).updateOne({
        instagram,
    });
    res.json(postDoc);
});

module.exports=router;