const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models');

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

router.get('/signin', (req, res) => {
    try {
        res.status(200).render('signin')
    } catch(err) {res.status(500).json(err)}
})

router.get('/post', (req, res) => {
    try {
        res.status(200).render('blogpost')
    } catch(err) {res.status(500).json(err)}
})

router.get('/dashboard', async (req, res) => {
    try {
        const existingPosts = await Post.findAll({
            include: [{ model: User }, { model: Comment }]
        })
        // console.log(existingPosts)
        const posts = existingPosts.map((post) => post.get({plain:true}))
        // console.log(posts)
        res.status(200).render('dashboard', {posts})
    } catch(err) {res.status(500).json(err)}
})

router.get('/:num', async (req, res) => {
    try {
        res.status(200).json({message: "sweet", hit: req.params.num})
    }
    catch(err) {res.status(500).json(err)}
})

module.exports = router;