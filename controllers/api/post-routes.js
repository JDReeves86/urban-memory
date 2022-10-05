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
        const userData = await User.findOne({
            where: {
                id: req.session.userID
            }
        })

        if (!userData) {
            res.status(400).json({message: 'How did yoiu get herre without logging in?'})
            return;
        }

        console.log(userData)
        const newPost = await Post.create({
            post: req.body.postData,
            user_id: userData.id
        })
        console.log(newPost)
        res.status(200).json(newPost)
    } catch(err) {res.status(500).json(err)}
});

module.exports = router