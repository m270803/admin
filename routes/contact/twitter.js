const express=require('express');
const router=express.Router();
const Contact=require('../../models/contact');

router.post('/', async (req,res) =>{
    const {twitter}=req.body;
    const postDoc = await Contact.updateOne({
        twitter,
    });
    res.json(postDoc);
});

module.exports=router;