
const Delivery = require('../models/Delivery');


const addDelivery = async (req, res) => {
  try {
    // Destructuring necessary information from the request body
    const { Rname, Rcnum, Daddress, Dfee, NearCity } = req.body;
    
   
    const deliveryItem = new Delivery({
      Rname,
      Rcnum,
      Daddress,
      Dfee,
      NearCity
    });

    await deliveryItem.save();

 
    res.status(201).json({ success: true, message: 'Delivery added successfully' });
  } catch (error) {
   
    console.error('Error adding delivery:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


module.exports = {
  addDelivery,
};
