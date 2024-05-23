const express=require('express');
const router=express.Router();
const Hero=require('../../models/Hero');
const multer=require('multer');
const uploadmiddleware = multer({dest:'uploads/'});
const fs = require('fs');

router.post('/', uploadmiddleware.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            res.json(postDoc);
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const { originalname, path } = req.file;
        const part = originalname.split('.');
        const ext = part[part.length - 1];
        const newPath = path + '.' + ext;
        await fs.rename(path, newPath);

        const { username } = req.body;
        if(Hero.findById(username).exec()){
                //to update the profile photo
            const postDoc = await Hero.findById(username).updateOne({
                profilePicUrl: newPath,
            });
            res.json(postDoc);
        }
        else
        {
            const postDoc = await Hero.create({
                username,
                profilePicUrl: newPath,
            });
            res.json(postDoc);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});