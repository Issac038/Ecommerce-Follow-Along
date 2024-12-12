
const express = require('express');
const  CreateUSer  = require('../controllers/user.controller.js');
const upload = require('../middleware/multer.js');

const router = express.Router();

router.post('/create-user', upload.single('file'), CreateUSer);
router.get('activation/:token',async(req,res)=>{
    const { token } = req.params;
    try{
        if(verifyUser(token)){
            return res.status(200).cookie();
        }
    return res.status(403).send({message:"token expired"})
    }catch (er) {
        return res.status(403).send({message: er.message})
    }
})
module.exports = router