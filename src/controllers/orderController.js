const Order = require('../models/orderModel')

exports.createOrder = async (req, res) => {
    try {
        // const orderDetails = req.body;
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
}

exports.getOrderDetail = async (req, res) => {
    try{
        const {id}=req.params
        const  order = await Order.findById(id);
        console.log(order);
        if (!order) {       
            return res.status(404).json({ message: 'Order not found' });
        }
        console.log("Order details:", order);
        await order.populate('product');
        await order.populate('employee');
        res.status(200).json({ message: 'Order retrieved successfully', order });

    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order', error: error.message });  
    }
}
