import mongoose from "mongoose";


const ReviewSchema = new mongoose.Schema({

    email:{
      required: true ,
      type: String,
      unique: true,
      trim: true,
      lowercase : true
    },
    name:{
        required: true,
        type: String,
    },
    review:{
        required: true,
        type: String,
    },
    rating:{
        required: true,
        type: Number,
    },
    
},
{ timestamps: true }
)

const reviewModel= mongoose.models.review || mongoose.model("review",ReviewSchema)
export default reviewModel