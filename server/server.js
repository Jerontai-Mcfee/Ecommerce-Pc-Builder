const express = require('express');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');
const cors = require('cors');


// create a database connection
// create a seperate file for this and then import / use that file 

mongoose.connect("mongodb+srv://jerontai07:Hopeisthere@28@cluster0.a74yt.mongodb.net/"
)
.then(()=>console.log('MongoDB connected'))
.catch((error)=> console.log(error));



const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content -Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(cookieparser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));