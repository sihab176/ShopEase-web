import mongoose from "mongoose";


const PaymentSchema= new mongoose.Schema({
    email:String ,
    name: String,
    amount_total: Number,
    currency: String,
    payment_status:String ,
    transaction_id : String,
    createdAt: Date,

})
export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema)