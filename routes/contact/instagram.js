const express=require('express');
const router=express.Router();
const Contact=require('../../models/contact');

router.post('/', async (req,res) =>{
    const {instagram}=req.body;
    const postDoc = await Contact.updateOne({
        instagram,
    });
    res.json(postDoc);
});

module.exports=router;