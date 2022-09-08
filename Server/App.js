const express= require('express')
const App= express()
const mongoose=require('mongoose')


const bodyParser=require('body-parser')
App.use(bodyParser.json())

const userRouter=require('./ROUTE/userRoute')
App.use('/user',userRouter)

const hairRouter=require('./ROUTE/hairRoute')
App.use('/hair',hairRouter)

const optionRouter=require('./ROUTE/optionRoute')
App.use('/option',optionRouter)

const priceRouter=require('./ROUTE/priceRoute')
App.use('/price',priceRouter)



mongoose.connect(
 "mongodb+srv://Rinat:Rinat94@mydata.hqizd.mongodb.net/test"
).then(()=>{
       console.log("connect to mongo!")
})
 
// App.get('/pop' ,(req,res)=>{
//        res.send("Hii EvreyBody")})
       
// App.get("/myProject",(req,res)=>{
//        //res.send("We are the champion;")
//        res.json({myName:"Riri"})
//        })
App.get('/',(req,res)=>{
       res.send('connect')
})

App.listen(3030,()=>{
       console.log ("listening on port 3030")
})

