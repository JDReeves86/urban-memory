const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection')

const createDB = async () => {
    await sequelize.query(
        'CREATE DATABASE IF NOT EXISTS blog_db',
        function(err,results) {
            if(err) {console.log(err)}
            else console.log(results)
        }
    )
}


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('**//---- DB synced');
    await seedUsers();
    console.log('**//---- Users sunk');
    await seedPosts();
    console.log('**//---- Posts added');
    await seedComments();
    console.log('**//---- Widgets turned');
    process.exit(0)
}

createDB();
seedAll();