const express = require('express');
const router = express.Router();

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

router.get('/dashboard', (req, res) => {
    try {
        res.status(200).render('dashboard')
    } catch(err) {res.status(500).json(err)}
})

router.get('/:num', async (req, res) => {
    try {
        res.status(200).json({message: "sweet", hit: req.params.num})
    }
    catch(err) {res.status(500).json(err)}
})

module.exports = router;