import mongoose from "mongoose";

let isConnected = false

const dbConnect=async()=>{
    if(isConnected){
        console.log("using existing mongodb connection");
        return;
    }

    try {
        const db= await mongoose.connect(process.env.MONGODB_URI);
        isConnected=db.connections[0].readyState;
        console.log("connected to mongodb");
    } catch (error) {
        console.log("error",error);
    }
}

export default dbConnect