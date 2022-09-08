const priceModel=require('../MODEL/priceModel')

// const NewPrice = (req, res) => {
//     let price = req.body
//     console.log(price);
//     if (user.password.length < 8 ) {
//         return res.send("the password is too short, enter a longer password")
//     }
//     let NewPrice = new priceModel(price)

//     NewPrice.save().then((response) => {
//         res.send("price added successfully" + response)
//     }) 
// } 
//
const NewPrice = (req, res) => {
    let price = req.body.price
    let NewPrice = new priceModel(price)
    NewPrice.save()
    res.send("the new price added successfully!")
}

//קבלת כל המספרים
const getAllprice = (req, res) => {
    priceModel.find((err, price) => {
        if (err) {
            res.send('error :' + err)
        }
        else {
            res.json({ price: price })
        }
    })
}

//קבלת מחיר ע"פ שם
const getPriceByName = async (req, res) => {
    try {
        
        let name = req.params.name
        let price = await priceModel.findOne({ name: name })
        res.json({ price: price })
    }
    catch (error) {
        res.send('error :' + error)

    }
}
// קבלת מחיר ע"פ קוד
const getPriceById = async (req, res) => {
    try {
        
        let id = req.params.id
        let price = await priceModel.findOne({ id : id })
        res.json({ price: price })
    }
    catch (error) {
        res.send('error :' + error)

    }
}

//מחיקת המחירים במספרה
const deletePrice = (req, res) => {
    priceModel.findByIdAndDelete(req.params.id).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
}

const UpdatePriceByName = (req, res) => {
    let name = req.params.name
    let NewPrice = req.body.price
    priceModel.findOneAndUpdate({ name: name }, NewPrice).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}





module.exports ={ NewPrice, getAllprice,getPriceByName ,getPriceById,deletePrice,UpdatePriceByName }