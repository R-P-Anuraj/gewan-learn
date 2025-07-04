const express = require('express');
const connectDB=require('./config/db')
const employeeRoutes=require('./routes/employeeRoutes')
const productRoutes=require('./routes/productRoutes')
const orderRoutes=require('./routes/orderRoutes') 
require('dotenv').config();



const app = express();

connectDB()

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/employees', employeeRoutes);
app.use('/product',productRoutes)
app.use('/order', orderRoutes);
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
