const Post = require('../models/Post');

const postData = [
    {
        title: "2 men enter, 1 man leaves.", 
        post: 'I blasted that guy in the thunderdome today. He went "splooorcht!" then I went to the methane farm because Auntie Entity is mean.',
        user_id: 2
    },
    {
        title: 'The Apocalypse sucks..',
        post: 'I am tired of wandering the desert, the apocalypse kind of sucks. Lots of weirdos and war lords.',
        user_id: 1
    },
    {
        title: 'Valhalla awaits!!',
        post: 'I live, I die, I live again! I am awaited in Valhalla!!!',
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts
