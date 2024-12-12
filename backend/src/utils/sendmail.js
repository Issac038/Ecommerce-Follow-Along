const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    auth:{
        user: 'Ecommerce follow along',
        pass: 'phvp qkgl ptic twum',
    },
    });

module.exports =transporter;