const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
const PORT = 3000;

const app = express();

// Set up Handlebars as the template engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');

const defaultController = require('./controllers/defaultController');
const defaultTitle = require('./middlewares/defaultTitle');

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'static' directory
app.use('/static', express.static('static'));

app.use(defaultTitle('Accommodation'));

app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);



app.all('*', defaultController);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
