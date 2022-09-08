const optionsModel=require('../MODEL/optionsModel')

//קבלת אופציה במספרה לפי קוד
const getOptionById = async (req, res) => {
    try {
        let id = req.params.id
        let option = await userModel.findById(id)
        res.json({ "option": option })
    }
    catch (error) {
        res.send('error :' + error)
    }
}

//קבלת אופציה במספרה לפי שם
const getOptionByName =async (req,res) => {
    try {
        let name = req.params.name
        let option = await optionsModel.findOne({ name: name }).populate("")
        res.json({ "option": option })
    }
    catch (error){
        res.send('error:' + error)
    }
} 

//הוספת אופציה חדשה
// const NewOption = (req, res) => {
//     let option = req.body.option
//     let NewOption = new optionsModel(option)
//     NewHairStylist.save()
//     res.send("the new option added successfully!")
// }
const NewOption = async(req, res) => {
    try{
        console.log("get in");
          let option = req.body
    let NewOption = new optionModel(option)
    await NewOption.save()
    res.send("the new option added successfully!")
    }
    catch (error){
        res.send('error :' +error)
    }
}

//עדכון אופציה לפי שם
const UpdateOptionByName = (req, res) => {
    let name = req.params.name
    let newNameOption = req.body.name
    optionsModel.findOneAndUpdate({ name: name }, { name: newNameOption }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//שליפת כל האופציות
const getAllOption = (req, res) => {
    optionsModel.find((err, option) => {
        if (err) {
            res.send('error :' + err)
        }
        else {
            res.json({ option: option })
        }
    })
}

//מחיקת האופציות במספרה
const deleteOption = (req, res) => {
    optionsModel.findByIdAndDelete(req.params.id).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
}

module.exports = { getOptionById, getOptionByName, NewOption, UpdateOptionByName, getAllOption,deleteOption, }