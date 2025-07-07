const express = require('express');
const router = express.Router();
const MarketPrice = require('../models/MarketPrice');
const { getMandiPrices } = require('../controllers/mandiPriceController');

// Add new price (optional)
router.post('/', async (req, res) => {
  try {
    const price = new MarketPrice(req.body);
    await price.save();
    res.json(price);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all saved prices
router.get('/', async (req, res) => {
  try {
    const prices = await MarketPrice.find().sort({ date: -1 });
    res.json(prices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ New route for real-time mandi prices
router.get('/live', getMandiPrices);

module.exports = router;
