const mongoose = require('mongoose');

//טבלת שמות ופרטים של הספרים
const hairSchema=mongoose.Schema({
    Name:{type:String,require},
    Last_Name:{type:String,require},
    expertise:[{type:String,require}],
    id:{type:Number,require},
    time:[{day:{type:String,require},time:{type:String,require}}]
    //req מחוייב להכניס ערך
}) 

module.exports =mongoose.model("Hair_stylist",hairSchema)