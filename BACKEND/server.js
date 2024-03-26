// server.js
const express = require('express'); //server handling
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); //parsing request bodies
const cors = require('cors'); 
const dotenv = require('dotenv'); 
const app = express(); 


require('dotenv').config();


const PORT = process.env.PORT || 8070;


const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

// Applying CORS middleware with options
app.use(cors(corsOptions));
app.use(cors());


app.use(bodyParser.json());


dotenv.config();

// MongoDB connection URL
const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {});


const connection = mongoose.connection;

// Handling MongoDB connection events
connection.once('open', () => {
    console.log('Mongoose Connection Success!!');
});


const UserRoute = require('./routes/UserRoutes');
app.use('/users', UserRoute);


const CartRoute = require('./routes/CartRoute');
app.use('/Cart', CartRoute);


const Delivery = require('./routes/DeliveryRoute');
app.use('/Delivery', Delivery);

const ListingRoutes = require('./routes/ListingRoute');
app.use('/RentProperties', ListingRoutes);


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});
