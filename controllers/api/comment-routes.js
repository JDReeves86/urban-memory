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



module.exports = router