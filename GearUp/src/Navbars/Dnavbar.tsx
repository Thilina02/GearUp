import React, { useState } from 'react'; 
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material'; 
import { Link as RouterLink } from 'react-router-dom'; 
import add from '../images/add.png'; 
import email from '../images/message.gif';
import phone from '../images/phone.gif'; 
import address from '../images/home.gif'; 
import { Add } from '@mui/icons-material'; 
import {
  Home as HomeIcon,
  MailOutline as ContactIcon,
  ExitToApp as SignInIcon,
  PersonAdd as SignUpIcon,
} from '@mui/icons-material'; 


interface NavbarProps {
  userSignedIn: boolean;
}


const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null); // State for anchor element
  const userSignedIn = true; // Dummy variable for user sign-in status


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };
  const iconStyle = { color: '#2b3fe6' };

 

 
  return (
    <AppBar position="static" style={{ display: "flex", backgroundColor: "Black" }}>
      <Toolbar>
      
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "#CFE1E8", fontStyle: "italic", fontSize: '40px' }}>
          GearUp
        </Typography>

      
        <div style={{}}>
        <Button color="inherit" component={RouterLink} to="/">
          <HomeIcon style={iconStyle} /> Home
        </Button>

       
        <Button
          color="inherit"
          aria-controls="contact-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <ContactIcon style={iconStyle} /> Contact Us
        </Button>
        <Menu
          id="contact-menu" // Unique identifier for the menu
          anchorEl={anchorEl} // Element to anchor the menu to
          open={Boolean(anchorEl)} // Whether the menu is open or not
          onClose={handleClose} // Function to handle menu close event
        >
         
          <MenuItem onClick={handleClose}> 
         
            <img src={phone} alt="email" style={{ width: '20px', marginRight: '8px' }} />
     
            Phone: (123) 456-7890
          </MenuItem>
          
          
          <MenuItem onClick={handleClose}> 
         
            <img src={email} alt="email" style={{ width: '20px', marginRight: '8px' }} />
         
            Email: Gearup@techProduct.lk
          </MenuItem>
          
          
          <MenuItem onClick={handleClose}> 
            
            <img src={address} alt="email" style={{ width: '20px', marginRight: '8px' }} />
           
            Address: 123 Main St, CityVilla
          </MenuItem>
        </Menu>


        
        <Button color="inherit" component={RouterLink} to="/Login">
          <SignInIcon style={iconStyle} /> Login
        </Button>
        <Button color="inherit" component={RouterLink} to="/Register">
          <SignUpIcon style={iconStyle} /> Register
        </Button>
       
        </div>
       </Toolbar>
    </AppBar>
  );
};

export default Navbar;
