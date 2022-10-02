const express = require('express');
const router = express.Router();
const pageRoutes = require('./routes');

router.use('/', pageRoutes)

router.use((req, res) => {
    res.send("<h1>Wrong Roots!</h1>")
  });

module.exports = router