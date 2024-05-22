const express=require('express');
const router=express.Router();
const About=require('../../models/About');

router.post('/', async (req,res) =>{
    const {bio}=req.body;
    const postDoc = await About.updateOne({
        bio,
    });
    res.json(postDoc);
});

module.exports=router;