const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase'); // import the connection object

// Load environment variables first
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// No need to call connectDatabase, it's already connected in the connectDatabase.js file

// Define routes
const products = require('./routes/product');
const orders = require('./routes/order');

// Use routes
app.use(`${process.env.BASE_URL}`, products);
app.use(`${process.env.BASE_URL}`, orders);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
