const express = require('express');
const router = express.Router();
const userRoute = require('./user-routes'); 
const postRoute = require('./post-routes');
const commentRoute = require('./comment-routes');

router.use('/users', userRoute);
router.use('/posts', postRoute);
router.use('/comments', commentRoute);

router.use((req,res) => {
    res.send('<h1>Wrong root!</h1>')
})

module.exports = router;