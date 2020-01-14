const express = require('express');
const router = express.Router();
const axios = require('axios');

// @route GET /giftcards
// @desc Gets a list of available giftcards
// @access Public
router.get('/', (req, res) => {
  const offset = Number(req.query.offset) || 0;
  const url = `${process.env.GIFTCARD_API}/brands?region=2&currencyisocode=USD&offset=${offset}&limit=20`
  axios({
    method: 'GET',
    url: url,
    headers: {
      'Authorization': `Bearer ${process.env.GIFTCARD_ACCESS_TOKEN}`
    }
  }).then((brands) => {
    res.send(brands.data)
  }).catch(error => {
    let payload = {
      httpStatus: error.status,
      message: 'Something went wrong fetching giftcards'
    }
    res.send(payload)
  })
});

module.exports = router;
