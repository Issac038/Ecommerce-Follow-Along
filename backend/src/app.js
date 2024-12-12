if(process.env.nODE_ENV !== 'PRODUCTION'){  
    require('dotenv').config({
        path:'./src/configurations/.env'
    });
}

const express = require('express');
const app = express();
const userRouter = require('')

app.get("/",(req,res)=>{
    return res.send("Welcome to backend")
})

app.use("/user")

module.exports = app;