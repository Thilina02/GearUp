
const Cart = require('../models/Cartmodel');


const addToCart = async (req, res) => {
  try {
    // Destructuring necessary information from the request body
    const { productId, title, price, negotiable, quantity } = req.body;

   
    const cartItem = new Cart({
      productId,
      title,
      price,
      negotiable,
      quantity
     
    });

   
    await cartItem.save();

 
    res.status(201).json({ success: true, message: 'Item added to cart successfully' });
  } catch (error) {
  
    console.error('Error adding item to cart:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


const getAllItems = async (req, res) => {
  try {
    
    const items = await Cart.find();
   
    res.status(200).json({ success: true, data: items });
  } catch (error) {
  
    console.error('Error getting items from cart:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


const deleteItem = async (req, res) => {
  try {

    const { itemId } = req.params;
    
    const deleteItem = await Cart.findByIdAndDelete(itemId);

    if (!deleteItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ success: true, message: 'Item deleted successfully' });
  } catch (error) {
   
    console.error('Error deleting item from cart:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


const updateCartById = async (req, res) => {
  try {
 
    const { itemId } = req.params;
    // Extract quantity from request body
    const { quantity } = req.body;

    
    const updatedCart = await Cart.findByIdAndUpdate(
      itemId,
      { quantity },
      { new: true } 
    );

  
    if (!updatedCart) {
      return res.status(404).json({ message: 'Cart item not found for update' });
    }

   
    res.json(updatedCart);
  } catch (error) {

    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const getCartById = async (req, res) => {
  try {
   
    const { id } = req.params;
   
    const cart = await Cart.findById(id);
   
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    // Respond with the found cart
    res.json(cart);
  } catch (error) {
  
    console.error('Error getting cart by ID:', error);
    res.status(500).json({ error: 'Error getting cart by ID' });
  }
};


module.exports = {
  addToCart,
  getAllItems,
  deleteItem,
  updateCartById,
  getCartById,
};
