
//routes to differnet route js folders based on what follows 'api/' in address.
const express = require('express');
const router = express.Router();
const userRoute = require('./user-routes'); 
const postRoute = require('./post-routes');
const commentRoute = require('./comment-routes');

router.use('/users', userRoute); // all routes for user manipulation/retrieval
router.use('/posts', postRoute); // all routes for post manipulation/retrieval
router.use('/comments', commentRoute); // all routes for comment manipulation/retrieval

router.use((req,res) => {
    res.send('<h1>Wrong root!</h1>')
})

module.exports = router;