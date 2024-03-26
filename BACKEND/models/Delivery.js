
// Cartmodel.js

const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  
  Rname: {
    type: String,
    required: true,
  },
  Rcnum: {
    type: String,
   
  },
  Daddress: {
    type: String,
    required: true,
  },
  Dfee: {
    type: Number,
    required: true,
  },
  NearCity: {
    type: String,
    required: true,
  },
 
  

});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;