const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');
const pagesRoute = require('./routes');

router.use('/api', apiRoutes);
router.use('/', pagesRoute);

// router.use((req, res) => {
//     res.send("<h1>Wrong Route!</h1>")
//   });

module.exports = router