//הניתוב הוא בעצם לאן שייך ומתקשר התוכן של הפונקציות הנוכחיות
const userModel = require('../MODEL/userModel')

const Login = (req, res) => {
    let name = req.params.name
    let pass = req.params.pass

    userModel.findOne({ name:name, password: pass }).then((response) => {
        res.send(" wellcome dear! to our hair style studio")

    }).catch((error) => {
        res.send('error:' + error)
    })
}

const getUserById = async (req, res) => {
    try {
        let id = req.params.id
        let user = await userModel.findById(id)
        res.json({ "user": user })
    }
    catch (error) {
        res.send('error :' + error)
    }
}
// Ctrl and ?
// const getUserByName =async (req,res) => {
//     try {
//         let name = req.params.name
//         let user = await userModel.findOne({ name: name }).populate("")
//         res.json({ "user": user })
//     }
//     catch (error){
//         res.send('error:' + error)
//     }
// } 
 
const NewUser = (req, res) => {
    let user = req.body
    console.log(user);
    if (user.password.length < 8 ) {
        return res.send("the password is too short, enter a longer password")
    }
    let NewUser = new userModel(user)

    NewUser.save().then((response) => {
        res.send("user  added successfully" + response)
    }) 
} 

module.exports = { Login, getUserById, NewUser }