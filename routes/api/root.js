const express = require('express');
const router = express.Router();

// @route GET /
// @desc Root of the api
// @access Public
router.get('/', (req, res) => {
  let data = {
    httpStatus: 200,
    message: `API Live in ${process.env.NODE_ENV || 'development'}`
  }
  res.send(data);
});

module.exports = router;