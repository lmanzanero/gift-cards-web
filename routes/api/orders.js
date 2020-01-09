const express = require('express');
const router = express.Router();

// item model
const Order = require('../../models/Order');

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', (req, res) => {
    res.send("Use /check-out to post an order");
  // Item.find()
  //   .sort({date: -1})
  //   .then(items => res.json(items));
});

// @route POST api/items
// @desc Creates an item
// @access Public
router.post('/check-out', (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    date: Date.now(),
    to: req.body.to,
    from: req.body.from,
    message: req.body.message,
    quantity: req.body.quantity,
    region: req.body.region,
    serviceFee: req.body.serviceFee,
    total: req.body.total
  });

  newOrder.save()
    .then(order => res.json(order));
});

// @route DELETE api/items
// @desc Delets an item
// @access Public
// router.delete('/:id', (req, res) => {
//   Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({success: true})))
//     .catch(error => res.status(404).json({success: false}));
// });

module.exports = router;