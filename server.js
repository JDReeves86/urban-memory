const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();
const helpers = require('./utils/formatTime')

const app = express();
const PORT = process.env.PORT || 3001;

// declares paths to be used by rouiter middleware.
const routes = require('./controllers');
//connects to db connection file.
const sequelize = require('./config/connection')

//sets up session storage
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 5 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// uses session storage object created above.
app.use(session(sess))

// cerates handlebars object and uses middleware to use based on imported library.
const handlebars = expressHandlebars.create({ helpers });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

//router middleware for routes in contoller folder
app.use(routes)

// Don't forget to sync to the database otherwise session storage adn cookies all go to
// heck in a handbasket.
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => 
    console.log(`Listening at ${PORT}`)
    )
})