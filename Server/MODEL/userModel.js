const mongoose=require('mongoose')

// טבלת משתמשים
const userSchema=mongoose.Schema({
    name:{type:String,require},
    lastName:{type:String,require},
    passwors:{type:Number,require},
    id:{type:Number,require},
    phone:{type:Number,require},
    emil:{type:String,require}  
})

module.exports =mongoose.model("User",userSchema)
