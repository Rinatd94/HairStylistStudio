const mongoose= require('mongoose');

//טבלת מחירים
const priceSchema=mongoose.Schema({

        name:{type:String,require},
        id:{type:Number,require},
        price:{type:Number,require}
          
}) 


module.exports =mongoose.model("price",priceSchema)