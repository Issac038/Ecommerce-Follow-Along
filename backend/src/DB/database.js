if(process.env.nODE_ENV !== 'PRODUCTION'){  
    require('dotenv').config({
        path:'../configurations/.env'
    });
}
const mongoose = require('mongoose')
const connectDatabase = ()=>{

    mongoose
    .connect(process.env.DB_URL)
    .then((data=>{
        console.log(`DB connected successfully:${data.connection.host}`);
    }))
    .catch((err)=>console.log("DB connection failed..",err.message))
};

module.exports = connectDatabase