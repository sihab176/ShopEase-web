import mongoose from "mongoose";



const RegistrationSchema= new mongoose.Schema(
{
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email : {
    type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase : true
    },
    password : {
    type: String,
      required: true,
    },
    
},
{timestamps: true}
)
const userModel = mongoose.models.User || mongoose.model("User", RegistrationSchema);
export default userModel