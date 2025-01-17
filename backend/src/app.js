const express = require('express')
const cors = require('cors')
const userRouter=require('./routes/user.routes.js');
const productRouter = require('./routes/product.route.js')
const cartRouter = require('./routes/cart.route.js')

if(process.env.nODE_ENV !== 'PRODUCTION'){  
    require('dotenv').config({
        path:'./src/configurations/.env'
    });
}


const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cors(
    'http://localhost:5173','http://localhost:8080'
))
app.use(cookieParser())


app.get("/",(req,res)=>{
    return res.send("Welcome to the backend")
})

app.use("/user",userRouter)
app.use('/product',productRouter)
app.use('/cart',cartRouter)

module.exports = app;