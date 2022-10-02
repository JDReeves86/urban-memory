// const { application } = require('express');
// const { Model } = require('sequelize');
// ABOVE LINES BREAK THE ASSOCIATIONS. UNCLEAR WHY

const express = require('express');
const { User, Post, Comment } = require('../models');
const bcrypt = require('bcrypt');
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

// Creates new user
router.post('/users', async (req, res) => {
    try{
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const userData = await User.create({
            user_name: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })
        res.status(200).json(userData);
    } 
    catch(err) {req.status(500).json(err)}
})

//Deletes user based on id
router.delete('/users/:id', async (req, res) => {
    try {
        const removedUser = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!removedUser) {
            res.status(200).json({message: "No user found!"})
            return;
        }
        res.status(200).json(removedUser);
    } 
    catch(err) {res.status(500).json(err)};
})

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

router.post('/posts', async (req, res) => {
    try {
        const newPost = await Post.create({
            post: req.body.post,
            user_id: req.body.user
        })
        res.status(200).json(newPost)
    } catch(err) {res.status(500).json(err)}
})

router.get('/comments', async (req, res) => {
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