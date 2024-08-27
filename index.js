const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/user_managment_system');

const express = require('express');
const app = express();
const path = require('path');

app.use("/static", express.static(path.join(__dirname, "public")));

//for user routes
const userRoute = require('./routes/userRoute');
                
app.use('/',userRoute);         
    
app.listen(3000,()=>{console.log('The server is started on http://localhost:3000')})                                        