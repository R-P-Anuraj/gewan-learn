const Product=require('../models/productModel')

exports.createProduct=async(req,res)=>{
   try{
     const productsdetails=req.body
    const product=new Product(productsdetails)
    await product.save()
    res.status(201).json({message:'product created successfully',product})
   }catch(error){
     res.status(500).json({ message: 'Error creating employee', error: error.message });
   }
}

exports.getAllProducts=async(req,res)=>{
    try{
        const products=await Product.find()
        res.status(200).json({message:'Products retrieved successfully',products})
    }catch(error){
        res.status(500).json({ message: 'Error retrieving products', error: error.message });
    }
}