const Comment = require('../models/Comment.js');

const commentData = [
    {
        comment: 'Remember when we fought in the thunderdome? lol I totes rocked you bro, I miss you!',
        user_id: 1,
        post_id: 1
    },
    {
        comment: "You're a weird dude..",
        user_id: 1,
        post_id: 3
    },
    {
        comment: 'Come back to Bartertown! We should have a beer.',
        user_id: 2,
        post_id: 2
     },
     {
        comment: "Are you in a cult?",
        user_id: 2,
        post_id: 3
     },    
     {
        comment: 'Mediocre!!',
        user_id: 3,
        post_id: 1
     },
     {
        comment: "Valhalla awaits!!",
        user_id: 3,
        post_id: 2
     },
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments