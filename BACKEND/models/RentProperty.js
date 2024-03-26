const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: String,
    
   
    price: String,
    furtherEnq: String,
    negotiable: Boolean,
   
    photos: [String],
    
})

const Listing = mongoose.model('RentListing', ListSchema);

module.exports = Listing;