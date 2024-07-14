const mongoose = require('mongoose');
const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongo database:${mongoose.connection.host}`);
        
    } catch (error) {
        console.log(`mongoose Database error ${error}`)
    }
}

module.exports=connectDB;