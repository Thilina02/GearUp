// CartRoute.js

const express = require('express');
const router = express.Router();
const deliveryController = require('../controller/DeliveryController');


router.post('/add-delivery', deliveryController.addDelivery);

module.exports = router;
