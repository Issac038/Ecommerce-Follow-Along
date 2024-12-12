const express = require('express')

const userRouter=require('./routes/user.routes.js');



if(process.env.nODE_ENV !== 'PRODUCTION'){  
    require('dotenv').config({
        path:'./src/configurations/.env'
    });
}


const app = express();


app.get("/",(req,res)=>{
    return res.send("Welcome to the backend")
})

app.use("/user",userRouter)

module.exports = app;