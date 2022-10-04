const express = require('express');
const expressHandlebars = require('express-handlebars');
const session = require('express-session');
require('dotenv').config();
const handlebars = expressHandlebars.create({});
const app = express();

const routes = require('./controllers');
// const apiRoutes = require('./controllers/api');

const path = require('path');

const PORT = process.env.PORT || 3001;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};

app.use(session(sess))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

//router middleware for routes in contoller folder
app.use(routes)
// app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
})