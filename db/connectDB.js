import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI).then(res=>console.log("mongodb: connected to db:")).catch(err=>console.log("mongodb: error connectinf db: ", err))
    } catch (err) {
        console.log("mongodb: catchblock: error connecting to db: ", err)
    }
}

export default connectDB