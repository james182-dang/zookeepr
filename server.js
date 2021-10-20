const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Middleware functions, required to accept POST data!!
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// allow files in public folder to be connected without using explicit routes,
// this allows the styling and any related files to be connected easily
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





// Listen!
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});