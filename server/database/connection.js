const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path:'.env'})
//const{MONGO_URI} = require('./../../config.js');

const connectDB = async()=>{
try{
//console.log(process.env.MONGO_URI);
//const con = await mongoose.connect(MONGO_URI,{})
const con = await mongoose.connect(process.env.MONGO_URI,{})
console.log(`MongoDB connected: ${con.connection.host}`)
}

catch(error){
    console.log(error);
    process.exit(1);

}


}
module.exports = connectDB;