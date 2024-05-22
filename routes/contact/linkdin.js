const express=require('express');
const router=express.Router();
const Contact=require('../../models/contact');

router.post('/', async (req,res) =>{
    const {linkdin}=req.body;
    const postDoc = await Contact.updateOne({
        linkdin,
    });
    res.json(postDoc);
});

module.exports=router;