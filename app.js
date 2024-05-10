const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const uploadmiddleware = multer({dest:'uploads/'});
const Hero = require('../models/Hero');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/adminApp', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Define routes
const heroRouter = require('./routes/hero');
const contactRouter = require('./routes/contact');

app.use('/api/hero', heroRouter);
app.use('/api/contact', contactRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

//register function
app.post(''/*register form name */, async(req,res)=>{
    const {username,password} =req.body;
    try{
        const userDoc= await User.create({
        username,
        password,
        });
        res.json(userDoc);
    }
    catch(e){
        res.status(400).json(e);
    }
});

//login function
app.post(''/*login form name */, async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const pk = bcrypt.compareSync(password,userDoc.password);
    if(pk){
        //logged in
        jwt.sign({username, id:userDoc._id}, tokensalt, {}, (err,token) =>{         //assigning a token to the user if logged in
            if(err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
        });
    }
    else{
        res.status(400).json('wrong credentials');
    }
})


// profile image uploading
app.post(''/*the page from where the file is to be uploaded-fronted*/,uploadmiddleware.single(''/*the fieldname in the form */), async (req,res) =>{
    const {originalname,path} = req.file;
    const part = originalname.split('.');
    const ext = part[part.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);

        const postDoc = await Hero.create({
            //require the data in form and assign it here to store in the database
            profilePicUrl=newPath,
        });
        res.json(postDoc);
});
