const express = require('express');
const PORT = 3000;
const app = express();

/** MIDDLEWARE start**/

// Global middleware: This middleware will run for all incoming requests.
app.use((req, res, next) => {
    // Log information about the incoming request, such as HTTP method and request path.
    console.log(`HTTP Request; ${req.method}, Request Path: ${req.path}`);
    // Call 'next()' to pass control to the next middleware or route handler in the chain.
    next();
})

// Partial routing middleware: This middleware will run for all requests to the root URL '/'.
app.use('/', (req, res, next) => {
    // Log a message indicating that the 'Home Middleware' has been invoked.
    console.log('Home Middleware has been invoked!');
    // Call 'next()' to pass control to the next middleware or route handler in the chain.
    next();
})

// Concrete routing middleware: This middleware is specific to the '/specific' route.
const specificMiddleware = (req, res, next) => {
    // Log a message indicating that the 'specificMiddleware' has been invoked.
    console.log('This is specific route MIDDLEWARE!');
    // Call 'next()' to pass control to the next middleware or route handler in the chain.
    next();
}

// Define a route for '/specific' and apply the 'specificMiddleware' to it.
app.get('/specific',
    // Middleware: 'specificMiddleware' will run before this route handler.
    specificMiddleware,
    (req, res) => {
        // Send a response for the '/specific' route.
        res.send('This is specific route!');
    })

/** MIDDLEWARE end**/


/** ROUTING start**/

// Define a route for the root URL '/'
app.get('/', (req, res) => {
    // Serve the 'index.html' file when a GET request is made to the root URL
    res.sendFile(__dirname + '/index.html');
});

// Define a route for '/create' using the route method
app.route('/create')
    .get((req, res) => {
        // Display a form with a 'name' input field when a GET request is made to '/create'
        res.send('<form method="POST"><input name="name"><button>Send</button></form>');
    })
    .post((req, res) => {
        // Handle a POST request to '/create'
        console.log('Handling POST request');
        // Redirect to the '/catalog' page after handling the POST request
        res.redirect('/catalog');
        // End the response
        res.end();
    });

// Define a DELETE route for '/create'
app.delete('/create', (req, res) => {
    // Handle a DELETE request to '/create'
    console.log('delete');
    // End the response
    res.end();
});

// Define a route for '/catalog'
app.get('/catalog', (req, res) => {
    // Serve the 'Catalog Page' when a GET request is made to '/catalog'
    res.send('Catalog Page');
});

// Define a dynamic route for '/catalog/:productId'
app.get('/catalog/:productId', (req, res) => {
    // Access the productId parameter from the URL and log it
    console.log(req.params.productId);
    // Serve 'Product Details Page' as the response
    res.send('Product Details Page');
});

// Define a dynamic route for '/catalog/:category/:id'
app.get('/catalog/:category/:id', (req, res) => {
    // Access the category and id parameters from the URL and log them
    console.log(req.params);
    // Serve 'Nested Parameters: <category>, <id>' as the response
    res.send('Nested Parameters: ' + req.params.category + ', ' + req.params.id);
});

// Define a route for '/data'
app.get('/data', (req, res) => {
    // Serve a JSON response when a GET request is made to '/data'
    res.json([
        {
            name: 'Peter',
            age: 25,
        }, {
            name: 'Ivan',
            age: 25,
        }
    ]);
});


app.get('/download-png', (req, res) => {

    // ? Ends the stream by itself
    // Serve the 'code.png' file for download
    res.download('./code.png')

    // ? You need to end the stream, because you can attach multiple files
    // res.attachment('./code.png')
    // res.end()
})

// Define a catch-all route to handle any other requests (404 Not Found)
app.all('*', (req, res) => {
    // Set the HTTP status code to 404
    res.status(404);
    // Serve '404 Not Found' as the response for all other routes
    res.send('404 Not Found');
});


/** ROUTING end**/


// Start the Express server and listen on the specified port
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
