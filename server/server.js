const express = require('express');
const mongoose = requre('mongoose');
const cookieparser = require('cookie-parser');
const cors =requre('cors');


// create a database connection
//create a seperate file for this and then import / use that file 

mongoose.connect("mongodb+srv://jerontai07:Hopeisthere@28@cluster0.a74yt.mongodb.net/"
)
.then(()=>console.log('MongoDB connected'))
.catch((error)=> console.log(error));



const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({})
)