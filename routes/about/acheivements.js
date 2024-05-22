const express=require('express');
const router=express.Router();
const About=require('../../models/About');

router.post('/', async (req,res) =>{
    const {acheivements}=req.body;
    const postDoc = await About.updateOne({
        acheivements,
    });
    res.json(postDoc);
});

module.exports=router;