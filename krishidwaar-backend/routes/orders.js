const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product'); // <-- Add this line
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Place Order (Buyer Only)
router.post('/', auth, async (req, res) => {
  try {
    const { productId, quantityOrdered } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const totalAmount = product.pricePerKg * quantityOrdered;

    const order = new Order({
      buyer: req.user.id,
      product: productId,
      quantity: quantityOrdered,
      totalAmount
    });

    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Orders of logged-in Buyer
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user.id }).populate({
      path: 'product',
      populate: {
        path: 'farmer',
        select: 'name'
      }
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
