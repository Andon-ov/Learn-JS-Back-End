const express = require('express');
const hbr = require('express-handlebars');
const PORT = 3000;

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const deleteController = require('./controllers/deleteController');



const handlebars = hbr.create({
    extname: '.hbs'
});

const app = express();
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: false }));

app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);
app.use('/delete', deleteController);

app.listen(PORT, console.log(`Server run on port: ${PORT}`));