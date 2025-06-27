const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Place Order (Buyer)
router.post('/', auth, async (req, res) => {
  try {
    const { productId, quantityOrdered } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

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

// Get Orders for Logged-in Buyer
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

// ✅ Get Orders for Farmer
router.get('/farmer', auth, async (req, res) => {
  try {
    const farmerId = req.user.id;
    const products = await Product.find({ farmer: farmerId });
    const productIds = products.map(p => p._id);

    const orders = await Order.find({ product: { $in: productIds } })
      .populate('buyer', 'name email')
      .populate('product', 'cropName pricePerKg');

    res.json({ orders });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Update Order Status
router.put('/:orderId/status', auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = req.body.status || order.status;
    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
