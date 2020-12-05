const express = require('express');
const route = express.Router();
const {getData,insertData,removeAllData} = require('../helpers/companyHelpers');

route.get('/', async (req,res)=>{
    console.log("company route");
    // res.status(200).send("users route");
    try{
        const data = await getData(req,res);
        res.status(200).send(data);
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send("Internal Error");
    }
});



route.post('/', async (req,res)=>{
    console.log("company route");
    // res.status(200).send("users route");
    try{
        const resp = await insertData(req,res);
        console.log(resp);
        if(resp)
            res.status(200).json({message:"success",data:resp});
        else
            res.status(200).json({message:"faliure",data:null});
        
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send("Internal Error");
    }
});



route.delete('/', async (req,res)=>{
    // res.status(200).send("users route");
    try{
        const resp = await removeAllData(req,res);
        console.log(resp);
        if(resp)
            res.status(200).json({message:"success",data:resp});
        else
            res.status(200).json({message:"faliure",data:null});
        
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send("Internal Error");
    }
});

module.exports = route;