const express = require('express');
const router = express.Router();

// @route GET /giftcards
// @desc Gets a list of available giftcards
// @access Public
router.get('/', (req, res) => {
  res.send({
    statusCode: 200,
    message: '/Giftcards'
  })
});

module.exports = router;
