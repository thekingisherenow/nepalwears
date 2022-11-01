import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler = async (req, res) =>{

    if (req.method === "POST"){
        let user =await User.findOne({email: req.body.email})
        var bytes  = CryptoJS.AES.decrypt(user.password, 'secret123');
        let decryptedpassword = bytes.toString(CryptoJS.enc.Utf8);

        if (user){

            if (req.body.email === user.email && req.body.password ===decryptedpassword )
            {
                var token = jwt.sign({ email : user.email , name :user.name }, 'CLB3730E1B', { expiresIn: '2d' });
                res.status(200).json({ success : true, token})
                console.log(token)


            } 
            else {
                res.status(200).json({ success : false , message :"Invalid credentialss" })
            }
        }
        else {
            res.status(200).json({ success : false , message :"Account doesnt exits" })

        }
    }
    else {
        res.status(400).json({ error : 'Wrong method !' })

    }

}
 
export default connectDb(handler)
  
  