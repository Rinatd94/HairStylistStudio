const mongoose=require('mongoose')

// טבלת אפשרויות שקיימות במספרה
//mongoose צריך להיות עם אות קטנה
const optionsSchema=mongoose.Schema({
    name:{type:String},
    id:{type:Number},
    price:{type:Number},
    time:{type:Number},
    hairStylist:[{ type:String,
    // skil:String 
}]
})

module.exports =mongoose.model("options",optionsSchema)
