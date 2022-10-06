const express = require('express');
const router = express.Router();
const { user, post, comment } = require('../../models');

// post routes. allows for GET for all posts.
router.get('/', async (req, res) => {
    try{
        const postData = await post.findAll({
            include: [{ model: user }, { model: comment }]
        })
        if (!postData) {
            res.status(200).json({message: "no user data found!"})
            return
        }
        res.status(200).json(postData)
    } catch(err) {res.status(500).json(err)}
});

// post for making new posts
router.post('/', async (req, res) => {
    try {
        const userData = await user.findOne({
            where: {
                id: req.session.userID
            }
        })
        if (!userData) {
            res.status(400).json({message: 'How did yoiu get herre without logging in?'})
            return;
        }
        const newPost = await post.create({
            post: req.body.post,
            title: req.body.title,
            user_id: userData.id
        })
        res.status(200).json(newPost)
    } catch(err) {res.status(500).json(err)}
});

// PUT route for updating posts
router.put('/', async (req, res) => {
    console.log(req.body)
    try {
        const postData = await post.update({
            post: req.body.post,
            title: req.body.title
        },
        {
            where: {
                id: req.body.id
            }
        });
        if(!postData) {
            res.status(400).json({message: "I'm honestly just as confused as you are."})
        };
        res.status(200).json(postData)
    } catch(err) {res.status(500).json(err)}
});

// delete route for removing posts.
router.delete('/', async (req, res) => {
    try {
        console.log(req.body)
        const removedPost = await post.destroy({
            where: {
                id: req.body.postID
            },
            include: [{ model: comment,
                as: 'comment'
            }]
        })
        if (!removedPost) {
            res.status(400).json({message: "It's already gone!"})
        }
        res.status(200).json(removedpost)
    } catch(err) {res.status(500).json({ message: "failed to delete it my dude."})}
})

module.exports = router