const express = require('express')
const userRouter=require('./routes/user.routes.js');
const productRouter = require('./routes/product.route.js')

if(process.env.nODE_ENV !== 'PRODUCTION'){  
    require('dotenv').config({
        path:'./src/configurations/.env'
    });
}


const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("Welcome to the backend")
})

app.use("/user",userRouter)
app.use('/product',productRouter)

module.exports = app;