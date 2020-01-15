const express = require('express');
const router = express.Router();

// @route POST /invoice
// @desc Generates an invoice
// @access Public
router.post('/', (req, res) => {
  try {
    const errorMsg = 'Missing required field';

    const data = {
      price: Number(req.body.price) || new Error(errorMsg),
      brandCode: req.body.brandCode || new Error(errorMsg),
      to: {
        email: req.body.email || new Error(errorMsg),
        firstName: req.body.firstName || new Error(errorMsg),
        lastName: req.body.lastName || new Error(errorMsg)
      }
    }

    
  } catch (e) {
    res.status(400).send({
      statusCode: 400,
      message: e.message
    })
  }
});

module.exports = router;