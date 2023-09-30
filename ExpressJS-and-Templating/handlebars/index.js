const express = require('express');
const hbr = require('express-handlebars');
const PORT = 3000;

const handlebars = hbr.create({
    extname: '.hbs'
});

const app = express();
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    // we can use res.locals 
    res.locals.message = 'Hello There';
    res.locals.response = 'General Kenobi';
    res.locals.username = 'Ivan';


    // or context object to send data to template
    res.render('home', {
        title: 'Handlebars Demo',
        product: {
            name: 'Product 1',
            price: '250',
            color: 'blue'
        },
        contacts: [
            {
                name: 'Peter',
                email: 'peter@abv.bg'
            },
            {
                name: 'Ivan',
                email: 'ivan@abv.bg'
            },
            {
                name: 'Andon',
                email: 'andon@abv.bg'
            },
        ]
        // message: 'Hello There',
        // response: 'General Kenobi'
    });
});


app.listen(PORT, console.log(`Server run on port: ${PORT}`));