const Post = require('../models/Post');

const postData = [
    {
       post: 'I blasted that guy in the thunderdome today. He went boom then I went to the methane farm because Auntie Entitty is mean.',
       user_id: 2
    },
    {
        post: 'I am tired of wandering the desert, the apocalypse kind of sucks. Lots of weirdos and war lords.',
        user_id: 1
    },
    {
        post: 'I live, I die, I live again! I am awaited in Valhalla!!!',
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts
