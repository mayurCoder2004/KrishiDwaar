const express = require('express');
const MarketPrice = require('../models/MarketPrice');
const router = express.Router();

// Add Market Price (Could be admin or external service)
router.post('/', async (req, res) => {
  try {
    const price = new MarketPrice(req.body);
    await price.save();
    res.json(price);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all Market Prices sorted by latest date
router.get('/', async (req, res) => {
  try {
    const prices = await MarketPrice.find().sort({ date: -1 });
    res.json(prices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
