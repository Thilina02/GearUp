import React from 'react';
import { Card, Typography, Button } from '@mui/material';
import './SuccessListing.css'
import Navbar from '../Navbars/Navbar';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../Navbars/Footer';
function SuccessListing() {
  return (
    <div>
        <Navbar/>
       <div className="Success" > 
      
        <button className="dismiss" type="button">×</button> 
        <div className="header"> 

        <div className="div_image_v">
            <div className="image">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div> 
        </div> 
            <div className="content">
                <span className="title">Successfully listed</span> 
                <Typography className="message">Revolutionizing the road one innovation at a time – because the journey to success is paved with cutting-edge car technology.</Typography> 
                </div> 
            
            </div> 
            <Button type="submit" variant='contained' color="primary"   
              component={RouterLink} to="/Dashboard" >Done</Button>
          
            </div>
            

            <Footer/>



    </div>
    
    

  );
}

export default SuccessListing;
