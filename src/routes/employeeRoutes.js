const express =require('express')
const router = express.Router();
const employeeController=require('../controllers/employeeController')

router.post('/create',employeeController.createEmployee)
router.get('/getAll',employeeController.getAllEmployees)
router.put('/update/:id',employeeController.updateEmployee)
router.delete('/delete/:id',employeeController.deleteEmployee)
router.patch('/updatep/:id',employeeController.patchEmployee)  
module.exports=router