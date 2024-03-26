
const Renting = require('../models/RentProperty');


const SubmitRenting = async (req, res) => {
    try {
        // Create a new Renting instance with the data from the request body
        const newRenting = new Renting(req.body);

        await newRenting.save();

        res.json({ success: true, message: 'Your rent property listing success!!' });
    } catch (error) {
   
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


const getRent = async (req, res) => {
    try {
    
        const data = await Renting.find();
 
        res.json(data);
    } catch (error) {

        console.error('Error fetching data', error);
        res.status(500).json({ error: 'Internal Server error!!' });
    }
};


const fetchById = async function(req, res) {
    try {
        // Extract the property ID from request parameters
        const { id } = req.params;

        const property = await Renting.findById(id);
   
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
      
        res.json(property);
    } catch (error) {
       
        console.error('Error getting property by ID:', error);
        res.status(500).json({ error: 'Error getting property by ID' });
    }
};


const deleteById = async (req, res) => {
    try {
    
        const { id } = req.params;
        // Use mongoose to delete the property by ID
        const deleteMeeting = await Renting.findByIdAndDelete(id);
   
        if (!deleteMeeting) {
            return res.status(404).json({ message: 'Property is not found' });
        }
      
        res.sendStatus(204);
    } catch (error) {

        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    SubmitRenting,
    getRent,
    fetchById,
    deleteById,
};
