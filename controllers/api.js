// const { application } = require('express');
const express = require('express');
// const { Model } = require('sequelize');
const {User, Post, Comment } = require('../models');
const router = express.Router();

router.get('/users', async (req, res) => {
    try{
        const userData = await User.findAll({
            include: [{ model: Post }, { model: Comment }]
        })
        if (!userData) {
            res.status(200).json({message: "no user data found!"})
            return
        }
        res.status(200).json(userData)
    } catch(err) {res.status(500).json(err)}
});

router.get('/posts', async (req, res) => {
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

router.get('/comments', async (req, res) => {
    try{
        const commentData = await Comment.findAll({
            include: [{ model: Post }, { model: Comment}]
        })
        if (!commentData) {
            res.status(200).json({message: "no user data found!"})
            return
        }
        res.status(200).json(commentData)
    } catch(err) {res.status(500).json(err)}
});


module.exports = router