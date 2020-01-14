const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");

// load environment variables in dev
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// routes
const root = require('./routes/api/root')
const giftcards = require('./routes/api/giftcards')
const orders = require('./routes/api/orders');


// rate limiting config
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});


// initialize app
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(limiter);

// connect to Mongo
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MonogoDB connected...'))
  .catch(err => console.log(err));

// use routes
app.use('/', root);
app.use('/v1/giftcards', giftcards);
app.use('/v1/orders', orders);

// set port
const port = process.env.PORT || 5000;

// listen to server
app.listen(port, () => console.log(`Server started on port ${port}`));