const express=require('express');
const router=express.Router();
const Hero=require('../../models/Hero');

router.post('/', async (req,res) =>{
    const {introduction}=req.body;
    const postDoc = await Hero.updateOne({
        introduction,
    });
    res.json(postDoc);
});

module.exports=router;