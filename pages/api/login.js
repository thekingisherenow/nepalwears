import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");


const handler = async (req, res) =>{

    if (req.method === "POST"){
        let user =await User.findOne({email: req.body.email})
        var bytes  = CryptoJS.AES.decrypt(user.password, 'secret123');
        let originalText = bytes.toString(CryptoJS.enc.Utf8);

        if (user){

            if (req.body.email === user.email && req.body.password ===originalText )
            {
                res.status(200).json({ success : true, email : user.email , password :user.password})
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
  
  