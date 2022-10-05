const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./controllers');
const sequelize = require('./config/connection')



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

app.use(session(sess))

const handlebars = expressHandlebars.create({});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

//router middleware for routes in contoller folder
app.use(routes)

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => 
    console.log(`Listening at ${PORT}`)
    )
})