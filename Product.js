const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    Uniq_id : String, 
    SKUOrId : String,
    Name : String,
    Description : String, 
    Price: Number,
    Av_Score : Number,
    category : String,
    brand : String,
    sale_price: Number

    
})


module.exports = mongoose.model("Product", productSchema)