import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // If you're using React Router
import add from '../images/add.png'
import email from '../images/message.gif'
import phone from '../images/phone.gif'
import address from '../images/home.gif'
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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const userSignedIn = true; 

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const iconStyle = { color: '#2b3fe6' };

  const handleSubmit = () => {
    // Handle form submission
  }

  return (
    <AppBar position="static" style={{ display: "flex", backgroundColor: "Black" }}>
      <Toolbar>
        {/* Logo or website name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "#CFE1E8", fontStyle: "italic", fontSize: '40px' }}>
          GearUp
        </Typography>

        {/* Navigation links */}
        <div style={{}}>
        <Button color="inherit" component={RouterLink} to="/Dashboard">
          <HomeIcon style={iconStyle} /> Home
        </Button>

        {/* Contact Us dropdown */}
        <Button
          color="inherit"
          aria-controls="contact-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <ContactIcon style={iconStyle} /> Contact Us
        </Button>
        <Menu
          id="contact-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
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

        {/* List Your Property button */}
        {userSignedIn ? (
          <Button color="inherit" component={RouterLink} to="/All-products">
           <Add style={iconStyle}  onClick={handleSubmit} /> Make a purchase
          </Button>
        ) : (
          <Button color="inherit" component={RouterLink} to="/SignIn">
            <Add style={iconStyle}  onClick={handleSubmit} />Sign In to Make a purchase
          </Button>
        )}

        {/* Additional buttons, such as login or sign up */}
        
        <Button color="inherit" component={RouterLink} to="/Cart">
          <SignInIcon style={iconStyle} /> Your Cart
        </Button>
        

        </div>
       </Toolbar>
    </AppBar>
  );
};

export default Navbar;
