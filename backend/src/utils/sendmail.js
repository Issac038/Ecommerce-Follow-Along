const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    auth:{
        user: 'issac.antony@kalium.community',
        pass: 'phvp qkgl ptic twum',
    },
    });

module.exports = transporter;