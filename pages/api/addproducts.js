import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) =>{

    if (req.method === "POST"){
      for (let i = 0; i < req.body.length; i++) {
        
        let p = new Product({
            title:req.body[i].title,
            desc:req.body[i].desc,
            slug:req.body[i].slug,
            img:req.body[i].img,
            category:req.body[i].category,
            price:req.body[i].price,
            availableQty:req.body[i].availableQty,
            size:req.body[i].size,
            color:req.body[i].color,
        })
        await p.save();
        
    } 
    res.status(200).json({ message : 'happy tihar !' })
    }
    else {
        res.status(400).json({ error : 'Wrong method !' })

    }
   
}
 
export default connectDb(handler)
  
  