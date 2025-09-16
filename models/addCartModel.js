import mongoose from "mongoose";

const addToCartSchema= new mongoose.Schema({
     product_name: {
      type: String,
      required: true,
      trim: true,
    },
     product_image: {
      type: String,
      required: true,
      default: ""
    },
     product_price: {
      type: Number,
      required: true,
    },
     product_category: {
      type: String,
      required: true,
      trim: true,
    },
     user_email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
     user_name: {
      type: String,
      required: true,
      default: ""
    },
    quantity:{
      type: Number ,
      required: true
    },
}
,
{timestamps:true}
)
const addCartModel = mongoose.models.AddCart || mongoose.model("AddCart", addToCartSchema);
export default addCartModel