import mongoose from "mongoose"

const connectDb = handler => async (req,res) => {
    if (mongoose.connections[0].readyState){
        console.log("hello from connectDb inside mongoose.js-middleware")

        return handler(req,res)
    }
    await mongoose.connect(process.env.MONGO_URI);
    return handler(req,res);
}

export default connectDb; 