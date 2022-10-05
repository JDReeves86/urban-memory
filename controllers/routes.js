const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../models');
const auth = require('../utils/auth')

// .render only the pieces that change. main.handlebars lives in layouts and stays there.
router.get('/', async (req, res) => {
    try {
        res.status(200).render('landing')
    } 
    catch(err) {res.status(500).json(err)}
})

router.get('/signup', (req, res) => {
    try {
        res.status(200).render('signup')
    } catch(err) {res.status(500).json(err)}
})

router.get('/login', (req, res) => {
    try {
        res.status(200).render('login')
    } catch(err) {res.status(500).json(err)}
})

router.get('/logout', (req, res) => {
    try {
        res.status(200).render('logout')
    } catch(err) {res.status(500).json(err)}
})

router.get('/post', (req, res) => {
    try {
        res.status(200).render('blog')
    } catch(err) {res.status(500).json(err)}
})

router.get('/dashboard', auth, async (req, res) => {
    try {
        const existingPosts = await Post.findAll({
            include: [{ model: User,
                attributes: ['user_name'] 
            },
            { model: Comment,
            include: { model: User,
                attributes: ['user_name'],
                where: Comment.user_id = User.id,
            } 
        }
        ]
        })
        // console.log(existingPosts)
        const posts = existingPosts.map((post) => post.get({plain:true}))
        const comments = posts.map((post) => post.comments)
        const users = comments.map((user) => user)
        res.status(200).render('dashboard', {
            posts,
            // comments,
            // users,
        }) 
    } catch(err) {res.status(500).json(err)}
})

router.get('/:num', async (req, res) => {
    try {
        res.status(200).json({message: "sweet", hit: req.params.num})
    }
    catch(err) {res.status(500).json(err)}
})

module.exports = router;