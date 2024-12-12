const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type:String,require:[true,'Please Enter the Nmae']},
    email: {
        type:String,
        require:[true,'Please Enter Email'],
        unique:[true,'Please Enter Unique Email Address']
    },
    password: {type:String,require:[true,'Please Enter Password']},
    address: [
        {city:String},
        {country:String},
        {add1:String},
        {add2:String},
        {zipcCode:String},
        {addressType:String},
    ],
    role: {type:String,require:true},
    avatar: {
        url:{type:String},
        public_id:{type:String},
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
    },
    {versionKey:false}
);

const UserModel = mongoose.model('User',userSchema)
module.exports = UserModel