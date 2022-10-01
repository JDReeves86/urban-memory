const User = require('../models/User')

console.log(User)

const userData = [
    {
        user_name: 'Mad-Max',
        password: 'CptWalker'
    },
    {
        user_name: 'Master-Blaster',
        password: 'Thunderdome'
    },
    {
        user_name: 'Nux',
        password: 'Valhalla'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;