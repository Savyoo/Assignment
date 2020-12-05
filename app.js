const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const app= express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port=process.env.port;

app.get('/',(req,res)=>{
    console.log("default");
    res.status(200).send("Default");
})

app.use('/users',require('./routes/users'));
app.use('/companies',require('./routes/companies'));


app.listen(port,()=>{console.log("connected on port", port)});
mongoose.connect(process.env.db_conn,{ useNewUrlParser: true ,useUnifiedTopology: true},()=>{console.log("Connected to db successfully")});