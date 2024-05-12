const mongoose=require('mongoose');

exports.dbConnection =async()=>{
    mongoose.set('strictQuery',true)
    await mongoose.connect('mongodb+srv://sharmamehul8448:KasfkmhvMtYt3PJP@cluster0.p0cndgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(()=>{
            console.log('Db Connected')
        }).catch((err)=>{
            console.log(err)
        })
}