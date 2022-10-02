const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models');
const bcrypt = require('bcrypt');


router.get('/', async (req, res) => {
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
router.post('/', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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


module.exports = router