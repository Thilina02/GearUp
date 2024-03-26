
const UserProfile = require('../models/UserModel'); // Assuming the model file is in the correct directory


const bcrypt = require('bcryptjs');
const { comparePassword } = require('../userEncrypt');
const jwt = require('jsonwebtoken'); 


const CreateUser = async (req, res) => {
    try {
        // Destructuring necessary information from the request body
        const { Fname, Lname, Email, Mnumber, address, password, Checkbox } = req.body;

       
        if (!Fname) {
            return res.status(400).json({ success: false, message: 'First name is required!' })
        }
        if (!Lname) {
            return res.status(400).json({ success: false, message: 'Last name is required!' })
        }
        if (!Email) {
            return res.status(400).json({ success: false, message: 'Email is required!' })
        }
        if (!Mnumber || Mnumber.length < 10) {
            return res.status(400).json({ success: false, message: 'Mobile number should be at least 10 digits!' })
        }
        if (!password || password.length < 8) {
            return res.status(400).json({ success: false, message: 'Password should contain at least 8 characters!' })
        }

      
        const validCheckbox = typeof Checkbox === 'boolean' ? Checkbox : false; 

        const hashedPassword = await bcrypt.hash(password, 10); //Generate a salted hash with a cost factor of 10
        
       
        const newUserProfile = new UserProfile({
            Fname,
            Lname,
            Email,
            Mnumber,
            address,
            password: hashedPassword,
            Checkbox: validCheckbox 
        });
        
        
        await newUserProfile.save();
        
        
        res.json({ success: true, message: 'User profile created successfully' });
    } catch (error) {
       
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


const loginUser = async (req, res) => {
    try {
        // Destructuring email and password from the request body
        const { Email, password } = req.body;

       
        const user = await UserProfile.findOne({ Email });

       
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

      
        const isPasswordValid = await comparePassword(password, user.password);
     
       
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        // Sign a JWT token
        // jwt.sign({ Email: user.Email, id: user._id, Email: user.Email, userType }, process.env.JWT_SECRET || 'fallback_secret', {}, (err, token) => {
        //     if (err) throw err;
        //     res.cookie('token', token).json({ success: true, token, userType });
        // });
    } catch (error) {
       
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


const getUserProfileById = async (req, res) => {
    try {
        
        const { id } = req.params;

     
        const userProfile = await UserProfile.findById(id);

      
        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }

       
        res.json(userProfile);
    } catch (error) {
       
        console.error('Error fetching user profile by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateUserById = async (req, res) => {
    try {
        // Extract the ID from the request parameters
        const { id } = req.params;

        // Destructure the updated data from the request body
        const { Fname, Lname, Email, Mnumber, link, address } = req.body;

        if (!Fname || !Lname || !Email || !Mnumber || !link || !address) {
            return res.status(400).json({ message: 'All fields are required for update' });
        }

    
        const updateUser = await UserProfile.findByIdAndUpdate(
            id,
            {
                Fname,
                Lname,
                Email,
                Mnumber,
                link,
                address,
            },
            { new: true } 
        );

        if (!updateUser) {
            return res.status(404).json({ message: 'User profile not found for update' });
        }

       
        res.json(updateUser);
    } catch (error) {
 
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    CreateUser,
    loginUser,
    getUserProfileById,
    updateUserById,
};
