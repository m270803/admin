const express=require('express');
const router=express.Router();
const Contact=require('../../models/contact');

router.post('/', async (req,res) =>{
    const {email}=req.body;
    const postDoc = await Contact.updateOne({
        email,
    });
    res.json(postDoc);
});

module.exports=router;