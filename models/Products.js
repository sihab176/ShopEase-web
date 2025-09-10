import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    offerPrice: {
      type: Number,
      default: null, // optional
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: "",
    },
    stock: {
      type: Number,
      required: true,
      min: 0, // stock can’t be negative
    },
    image: {
      type: [String], 
      default: [],
    },
    seller_email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true } // will automatically add createdAt and updatedAt
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
