const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models');


router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            include: [{ model: User }, { model: Comment }]
        })
        if (!postData) {
            res.status(200).json({message: "no user data found!"})
            return
        }
        res.status(200).json(postData)
    } catch(err) {res.status(500).json(err)}
});

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            post: req.body.post,
            user_id: req.body.user
        })
        res.status(200).json(newPost)
    } catch(err) {res.status(500).json(err)}
})

module.exports = router