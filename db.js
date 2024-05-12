const mongoose=require('mongoose');

exports.dbConnection =async()=>{
    mongoose.set('strictQuery',true)
    await mongoose.connect('mongodb+srv://vikramviks0802:ei6kTjyQQjnoletR@cluster0.kalkm7h.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>{
            console.log('Db Connected')
        }).catch((err)=>{
            console.log(err)
        })
}