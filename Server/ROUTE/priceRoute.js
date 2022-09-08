const router=require('express').Router()
const priceController=require('../CONTROLLERS/priceController')


router.post('/NewPrice',priceController.NewPrice)
router.get('/getAllprice',priceController.getAllprice)
router.get('/getPriceByName/:name',priceController.getPriceByName)
router.get('/getPriceById/:id',priceController.getPriceById)
router.delete('/deletePrice/:id',priceController.deletePrice)
router.patch('/UpdatePriceByName/:name',priceController.UpdatePriceByName)

module.exports=router


