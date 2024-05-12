const express=require('express');
const router=express.Router();
const Hero=require('../models/Hero');
const uploadmiddleware = multer({dest:'uploads/'});
const fs = require('fs');

router.post('/Hero',uploadmiddleware.single('file'), async (req,res) =>{
    const {originalname,path,} = req.file;
    const part = originalname.split('.');
    const ext = part[part.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
        const {fullname,lastname,title,intro}=req.body;
        const postDoc = await Hero.create({
            //require the data in form and assign it here to store in the database
            profilePicUrl:newPath,
            fullName: fullname/*name from form */,
            lastName: lastname/*name from form */ ,
            titles: title/*title from form */,
            introduction: intro/*paragraph from form */,
        });
        res.json(postDoc);
});

module.exports=router;