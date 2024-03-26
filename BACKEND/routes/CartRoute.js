// Importing the Express library
const express = require('express');
// Creating a router instance
const router = express.Router();
const cartController = require('../controller/Cart');


router.post('/add-to-cart', cartController.addToCart);
router.get('/getall', cartController.getAllItems);
router.delete('/deleteCart/:itemId', cartController.deleteItem);
router.put('/UpdateCart/:itemId', cartController.updateCartById);
router.get('/GetbyId/:id', cartController.getCartById);


module.exports = router;
