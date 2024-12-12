const ErrorHandler = require("../utils/ErrorHandler.js")
const UserModel = require("../model/user.model.js");
const { transporter } = require("../utils/sendmail.js");
async function CreateUSer(req,res){
    const {name,email,password} = req.body;
    const CheckUserPresent = await UserModel.findOne({
        email:email,
    });

    if(CheckUserPresent){
        const error = new ErrorHandler('User is already present in database',400);

        return res.status(404).send({
            message:error.message,
            status:error.statusCode,
            success:false
        })
    }

    
    const newUser = new UserModel({
        name: name,
        email:email,
        password:password,
    });

    await transporter.sendMail({
        to: 'issaclyndon@gmail.com',
        from: 'issac.antony@kalvium.community',
        subject: 'Verification email for the e-commerce site',
        text: 'Please click the following link',
        html:' <h1>Hello world </h1>'
    });

    await newUser.save();
    return res.send('User Created Successfully')
}

module.exports = CreateUSer