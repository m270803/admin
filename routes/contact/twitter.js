const express=require('express');
const router=express.Router();
const Contact=require('../../models/contact');

router.post('/', async (req,res) =>{
    const {twitter,username}=req.body;
    const postDoc = await Contact.create({
        username,
        twitter,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {twitter,username}=req.body;
    const postDoc = await Contact.findById(username).updateOne({
        twitter,
    });
    res.json(postDoc);
});

module.exports=router;