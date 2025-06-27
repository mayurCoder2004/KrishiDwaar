const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Add Product (Farmer Only)
router.post('/', auth, async (req, res) => {
  try {
    const { cropName, quantity, pricePerKg, location, imageUrl } = req.body;

    const product = new Product({
      farmer: req.user.id,
      cropName,
      quantity,
      pricePerKg,
      location,
      imageUrl  // optional
    });

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Products (Public)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('farmer', 'name');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get Products by Logged-in Farmer
router.get('/my', auth, async (req, res) => {
  try {
    const products = await Product.find({ farmer: req.user.id });
    res.json({ products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
