
const handler = async (req,res) => {

    let data = {
        "return_url" : `${process.env.NEXT_PUBLIC_HOST}/forgot`,
        "website_url" : `${process.env.NEXT_PUBLIC_HOST}`,
        "amount" : 1300,
        "purchase_order_id" : "test12",
        "purchase_order_name" : "test"
    }
    if (req.method === "POST"){

        console.log("beginning")
        let response = await fetch("https://a.khalti.com/api/v2/", {
            method: 'POST',
            
            headers: {
              'Content-Type': 'application/json',
              "Authorization": "Key test_secret_key_3af9c63e026d4230be3c8f6d98722f0e"  
            },

            body: JSON.stringify(data)
        })
        let heyy = await response.json()

        console.log("heyy",heyy)
        res.status(200).json({success : heyy})                    
       
    }
    else 
    {
        res.status(400).json({ error : 'wrong method' })                    
        
    }
}

export default handler

