const express=require('express');
const router=express.Router();
const Contact=require('../../models/contact');

router.post('/', async (req,res) =>{
    const {email,username}=req.body;
    const postDoc = await Contact.create({
        username,
        email,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {email,username}=req.body;
    const postDoc = await Contact.findById(username).updateOne({
        email,
    });
    res.json(postDoc);
});

module.exports=router;