const express = require('express');
const expressHandlebars = require('express-handlebars');
const handlebars = expressHandlebars.create({});
const app = express();
const routes = require('./controllers/routes');
const apiRoutes = require('./controllers/api')
const path = require('path');

const PORT = process.env.PORT || 3001;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//router middleware for routes in contoller folder
app.use('/', routes)
app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
})