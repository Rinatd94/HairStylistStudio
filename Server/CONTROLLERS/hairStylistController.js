const { response } = require('express')
const hairStylistModel=require('../MODEL/hairStylistModel')


const Login = ( req , res ) => {
    console.log("login")
   let name = req.params.name
   let id = req.params.id

//מציאת מעצב שיער עי קוד
hairStylistModel.findById({ Name:name, id:id }).then((response) => {
       res.send("conected succsesfully")

   }).catch((error) => {
       res.send('error:' + error)
   })
}

//שליפת מעצבי שיער עי קוד אישי
const getHairStylistById = async (req, res) => {
    try {
        let id = req.params.id
        let hairStylist = await hairStylistModel.findOne({id:id})
        res.json({ "hairStylist": hairStylist })
    }
    catch (error) {
        res.send('error :' + error)
    }
}

//שליפת מעצב שיער לפי שם
const getHairStylistByName = async (req, res) => {
    try {
        
        let name = req.params.name
        let hairStylist = await hairStylistModel.findOne({ Name: name })
        res.json({ hairStylist: hairStylist })
    }
    catch (error) {
        res.send('error :' + error)
    }
}
//יצירת ספר חדש
const NewHairStylist = async(req, res) => {
    try{
          let hairStylist = req.body
    let NewHairStylist = new hairStylistModel(hairStylist)
    await NewHairStylist.save()
    res.send("the new hair stylist added successfully!")
    }
    catch (error){
        res.send('error :' +error)
    }
}

//עדכון מעצב שיער לפי שם
const UpdateHairStylistByName = (req, res) => {
    let name = req.params.name
    let newNamehairStylist = req.body
    hairStylistModel.findOneAndUpdate({ Name: name }, req.body).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//שליפת כל מעצבי השיער
const getAllHairStylists = (req, res) => {
    hairStylistModel.find().then((ress) => {
     res.send(ress)})
       .catch((err)=>{
           res.send(err)
       }) 
}

//מחיקת מעצב שיער
const deleteHairStylist = (req, res) => {

    hairStylistModel.findOneAndDelete({id:req.params.id}).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
}


// //שליפת שעות עבודה
// const getTimeHairStylistById = async (req, res) => {
//     try { 
//         let id = req.params.id
//         let hairStylist = await hairStylistModel.findOne({ name: name })
//         res.json({ hairStylist: hairStylist })
//     }
//     catch (error) {
//         res.send('error :' + error)
//     }
// }

//עדכון שעות עבודה
const UpdateTimeHairStylistByName = (req, res) => {
    console.log( req.params)
    let name = req.params.name
    let lastname = req.params.lastName
    let newNamehairStylist = req.body.time
    hairStylistModel.findOneAndUpdate({$and:[ {Name: name},{Last_Name:lastname} ]}, { time: newNamehairStylist }).then((response) => {
        res.send(`hello!! ${response} updated hair successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

module.exports={Login,getHairStylistById,NewHairStylist,getHairStylistByName,UpdateHairStylistByName,getAllHairStylists,deleteHairStylist,UpdateTimeHairStylistByName}
