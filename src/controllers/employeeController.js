const Employee = require('../models/employeeModel')

// create employee
exports.createEmployee = async (req, res) => {
    try {
        console.log(req.body);
        const { firstname, lastname, email, phone, age, company } = req.body;
        const employee = new Employee({ firstname, lastname, email, phone, age, company });
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Error creating employee', error: error.message });
    }
};

// get all emoployees
exports.getAllEmployees = async (req, res) => {             
    try {
        console.log("Fetching all employees");
        const employees = await Employee.find();
        res.status(200).json({ message: 'Employees retrieved successfully', employees });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving employees', error: error.message });
    }
};

// update employee
exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const employee = await Employee.findByIdAndUpdate(id, updatedData);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
         res.status(200).json({ message: 'Employee updated successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Error updating employee', error: error.message });
    }
};

// delete employee
exports.deleteEmployee = async (req, res) => { 
    try {
        const { id  } = req.params;
        // {id:123456}
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting employee', error: error.message });
    }
};

// // update using patch
// exports.patchEmployee = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedData = req.body;
//         const employee = await Employee.findByIdAndUpdate(id, updatedData);     
//     if (!employee) {
//             return res.status(404).json({ message: 'Employee not found' });
//         }       
//         res.status(200).json({ message: 'Employee updated successfully', employee });
//     } catch (error) {               
//         res.status(500).json({ message: 'Error updating employee', error: error.message });
//     }
// }

// update using patch
exports.patchEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const employee = await Employee.findByIdAndUpdate(id, updatedData);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Error updating employee', error: error.message });
    }
};
