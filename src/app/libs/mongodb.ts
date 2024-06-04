import mongoose from "mongoose";

 const connectMongoDB=async():Promise<void>=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("request accepted")
    } catch (error) {
        console.log("error")
    }
}
export default connectMongoDB