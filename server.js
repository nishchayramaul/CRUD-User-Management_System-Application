const express  = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')
//const{PORT} = require('./config');
app.use(bodyparser.urlencoded({extended: true}))


dotenv.config({path:'.env'});

const PORT = process.env.UNO;
 

// log requests
app.use(morgan('tiny'));

//mongoDB connection
connectDB();

//request to body parser
//app.use(bodyparser.urlencoded({extended: true}))

//set view engine
app.set("view engine","ejs");
//load assests
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routes
app.use('/', require('./server/routes/router'));

app.listen(PORT,() =>{console.log(`Server is running on ${PORT}`)});