const express=require('express')
const router=express.Router()
const productController=require('../controllers/productController')


router.post('/create',productController.createProduct)
router.get('/getAll',productController.getAllProducts)
module.exports=router