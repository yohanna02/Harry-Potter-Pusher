const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an App.
const app = express();

// Include the body-parser middle ware.
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

// Enable CORS.
app.use( cors() );

// Set the port.
const port = 3000;
// Listen to incoming connections.
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
