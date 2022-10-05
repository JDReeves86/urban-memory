const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models');


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
        const userData = await User.create({
            user_name: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })
        res.status(200).json(userData);
    } 
    catch(err) {res.status(500).json(err)}
})

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                user_name: req.body.user,
            },
        });

        if (!userData) {
            res.status(400).json({message: 'Incorrect email or password.'})
        }

        // console.log(userData)
 
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            console.log('logging in' + req.session.cookie);
            res.status(200).json({user: userData, message:"it worked?"})
        })
        // console.log(req.session.userId)
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

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