const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models');


router.get('/', async (req, res) => {
    try{
        const commentData = await Comment.findAll({
            include: [{ model: Post }, { model: User}]
        })
        if (!commentData) {
            res.status(200).json({message: "no user data found!"})
            return
        }
        res.status(200).json(commentData)
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

        const newComment = await Comment.create({
            comment: req.body.comment,
            post_id: req.body.post_id,
            user_id: userData.id,
        })
        console.log(newComment)
        res.status(200).json(newComment)
    } catch(err) {res.status(500).json(err)}
});

module.exports = router