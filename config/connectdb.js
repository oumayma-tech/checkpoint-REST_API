const mongoose=require('mongoose');
require('dotenv').config({path:'./config/.env'})


const connectdb=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology: true , UseCreateIndex:true,useFindAndModify:false})
        console.log('connected')
    } catch (error) {
        console.log('not connected')
        
    }
}
module.exports=connectdb