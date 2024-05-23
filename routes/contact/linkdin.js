const express=require('express');
const router=express.Router();
const Contact=require('../../models/contact');

router.post('/', async (req,res) =>{
    const {linkdin,username}=req.body;
    const postDoc = await Contact.create({
        username,
        linkdin,
    });
    res.json(postDoc);
});

router.put('/', async (req,res) =>{
    const {linkdin,username}=req.body;
    const postDoc = await Contact.findById(username).updateOne({
        linkdin,
    });
    res.json(postDoc);
});

module.exports=router;