const UserModel = require("../model/user.model")
export async function CreateUSer(req,res){
    const {name,email,password} = req.body;
    const CheckUserPresent = await UserModel.findOne({
        email:email,
    });

    if(CheckUserPresent){
        return res.send("User Already Exists")
    }
    
    new UserModel({
        name: name,
        email:email,
        password:password,
    });

    await UserModel.save();
    return res.send('User Created Successfully')
}