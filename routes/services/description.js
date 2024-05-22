const express=require('express');
const router=express.Router();
const Service=require('../../models/Services');

router.post('/', async (req,res) =>{
    const {description}=req.body;
    const postDoc = await Service.updateOne({
        description,
    });
    res.json(postDoc);
});

module.exports=router;