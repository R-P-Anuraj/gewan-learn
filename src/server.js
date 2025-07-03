const express = require('express');
const connectDB=require('./config/db')
const employeeRoutes=require('./routes/employeeRoutes')
require('dotenv').config();



const app = express();

connectDB()

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/employees', employeeRoutes);

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
