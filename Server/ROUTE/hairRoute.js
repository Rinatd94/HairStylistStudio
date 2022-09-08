const router=require('express').Router()
const hairStylistController=require('../CONTROLLERS/hairStylistController')

//router.get('/login',userController.Login)
//router.get('/getUserById/:id',userController.getUserById)
router.get('/login',hairStylistController.Login),
router.get('/getHairStylistById/:id',hairStylistController.getHairStylistById),
router.get('/getHairStylistByName/:name',hairStylistController.getHairStylistByName),
router.get('/getAllHairStylists',hairStylistController.getAllHairStylists),
router.patch('/UpdateHairStylistByName/:name',hairStylistController.UpdateHairStylistByName),
router.delete('/deleteHairStylist/:id',hairStylistController.deleteHairStylist)
router.post('/NewHairStylist',hairStylistController.NewHairStylist),
router.patch('/UpdateTimeHairStylistByName/:name/:lastName',hairStylistController.UpdateTimeHairStylistByName)

module.exports=router




