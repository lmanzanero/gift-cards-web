const express = require('express');
const router = express.Router();
const Invoice = require('../../domain/Invoice')

// @route POST /invoice
// @desc Generates an invoice
// @access Public
router.post('/', (req, res) => {
  try {
    const errorMsg = 'Missing required field';

    let data = {
      price: Number(req.body.price) || new Error(errorMsg),
      brandCode: req.body.brandCode || new Error(errorMsg),
      to: {
        email: req.body.to.email || new Error(errorMsg),
        name: req.body.to.name || new Error(errorMsg),
      }
    }

    const invoice = new Invoice(data);
    // let payload = invoice.generate();
    // res.send(payload)
    res.status(201).send(invoice.generate());
  } catch (e) {
    console.log(e)
    res.status(400).send({
      statusCode: 400,
      message: e.message
    })
  }
});

module.exports = router;