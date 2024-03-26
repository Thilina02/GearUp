// Importing mongoose library for schema creation
const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
 
  productId: {
    type: String,
    required: true,
  },
 
  title: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
  },
 
  price: {
    type: Number,
    required: true,
  },
  
  negotiable: {
    type: Boolean,
    required: true,
  },

});


const Cart = mongoose.model('Cart', cartSchema);


module.exports = Cart;
