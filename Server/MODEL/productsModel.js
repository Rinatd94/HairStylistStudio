const mongoose=require('mongoose');

//טבלת מוצרים שיש בסטודיו
const productsSchema=mongoose.Schema({
    name:{type:String,require},
    id:{type:Number,require},
    price:{type:Number,require}
})

module.exports=mongoose.model("products",productsSchema)