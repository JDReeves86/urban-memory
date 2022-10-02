const User = require('../models/User')

console.log(User)

const userData = [
    {
        user_name: 'Mad-Max',
        password: 'CptWalker',
        email: 'Mad@max.com'
    },
    {
        user_name: 'Master-Blaster',
        password: 'Thunderdome',
        email: 'ThunderdomeChamp123@fake.com'
    },
    {
        user_name: 'Nux',
        password: 'Valhalla',
        email: 'WitnessMe156148@Warboys.com'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;