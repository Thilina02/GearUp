import React from 'react';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';
import { Card,CardMedia,CardContent,CardActions } from '@mui/material';
import Footer from '../Navbars/Footer';
import Homeimg11 from '../images/Homeimg1.avif';
import Homeimg2 from '../images/Homeimg2.avif';
import Homeimg3 from '../images/Homeimg3.avif';
import Homeimg4 from '../images/Homeimg4.avif';
import Homeimg5 from '../images/Homeimg5.avif';
import Homeimg6 from '../images/Homeimg6.avif';
import Homeimg7 from '../images/Homeimg7.avif';
import Homeimg8 from '../images/Homeimg8.avif';
import { Button } from "@mui/material";
import Navbar from '../Navbars/Dnavbar';
import { Link as RouterLink } from 'react-router-dom';
import './Home.css';



const CheckHome = () => {
  return (
    <div className='container'>
       <Navbar/>
          <div className='UpImages'>
        <div className='TopOne'>
        <h1> Welcome to Gearup</h1><br></br>
        <p>Simplifying Your Tech Shopping Experience, One Click at a Time!</p>
        
        </div>
     {/* Images at the top*/}
      <div className='box'>
        <span style={{ '--i': 1 } as React.CSSProperties}>
          <img src={Homeimg11} alt='slide1' />
        </span>
        <span style={{ '--i': 2 } as React.CSSProperties}>
          <img src={Homeimg2} alt='slide2' />
        </span>
        <span style={{ '--i': 3 } as React.CSSProperties}>
          <img src={Homeimg3} alt='slide3' />
        </span>
        <span style={{ '--i': 4 } as React.CSSProperties}>
          <img src={Homeimg4} alt='slide4' />
        </span>
        <span style={{ '--i': 5 } as React.CSSProperties}>
          <img src={Homeimg5} alt='slide5' />
        </span>
        <span style={{ '--i': 6 } as React.CSSProperties}>
          <img src={Homeimg6} alt='slide6' />
        </span>
        <span style={{ '--i': 7 } as React.CSSProperties }>
          <img src={Homeimg7} alt='slide7' />
        </span>
        <span style={{ '--i': 8} as React.CSSProperties}>
          <img src={Homeimg8} alt='slide8' />
        </span>
      </div>

      </div>

      <Grid container xs={5.3}>
        <Grid xs={12}>
        <Typography variant='h4' style={{fontWeight:"bold", marginTop:"10vh", display:'grid',placeItems:'center'}}>Join the Revolution. Evolve with Us.</Typography>
      <Typography variant='body1' 
      style={{display:'grid',placeItems:'center', padding:'10px', width:'100vh'}}>
      Transforming Dreams into Digital Reality, Join Us on the Journey to Shape the Future Together.
      </Typography>

     

        </Grid>
      </Grid>
      

      <div className='accordion'>
      <ul className='uli'>
        <li className='lilu'>
          <div>
            <a href='#'>
              <h2>GearUp Signature Technologies</h2>
             
            </a>
          </div>
        </li>
        <li className='lilu'>
          <div>
          <a href='#'>
              <h2>TechHaven, Where Innovation Finds Its Home</h2>
            
            </a>
          </div>

        </li>
        <li  className='lilu'>
          <div>
          <a href='#'>
              <h2>TechVista, Elevating Your Tech Lifestyle, One Purchase at a Time</h2>
           
            </a>
          </div>

        </li>
        <li  className='lilu'>
          <div>
          <a href='#'>
              <h2>TechScape, Your Gateway to Cutting-Edge Gadgets and Gizmos</h2>
            
            </a>
          </div>

        </li>
        
      </ul>
      </div>
    
      <Button
              variant="contained"
              color="primary" style={{marginTop:"5vh"}}
              component={RouterLink} to="/Register"
             
            >
             Register
            </Button>
    

    
      <Grid container xs={9.2} style={{ margin: '36px'}}>
        <Grid xs={12}>
        <Typography variant='h4' style={{fontWeight:"bold"/*,  marginLeft:"-114vh", marginTop:"10vh"*/}}>Why GearUp</Typography>
      <Typography variant='body1'  style={{}}>
          To guarantee that our customers make well-informed Technology decisions,
          our skilled staff combines a thorough understanding of specialized property sectors
          with a dedication to upholding the highest standards of client care.
      </Typography>
       

        </Grid>
      </Grid>
     
 
       <Grid container sx={{flexGrow:1,alignItems:'center', justifyContent:'center',width:'175vh'}} >
        <Grid xs={4}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Wide Product Selection
              </Typography><Typography className="cardd-para">
              At GearUp Technologies, we offer a vast array of the latest tech products, 
              ensuring customers have access to the most cutting-edge gadgets and accessories 
              for all their needs.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>

        <Grid xs={4}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Competitive Pricing
              </Typography><Typography className="cardd-para">
              Enjoy competitive prices at GearUp Technologies, 
              where affordability meets quality. We strive to 
              provide our customers with the best value for their 
              money without compromising on excellence.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>


        <Grid xs={4}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">User-Friendly Interface
              </Typography><Typography className="cardd-para">
              With our intuitive online platform, 
              navigating through our extensive catalog and completing purchases is a breeze. 
              GearUp Technologies prioritizes user experience, making tech shopping convenient and enjoyable.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>


        <Grid xs={4} sx={{marginTop:'-5vh'}}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Reliable Customer Support
              </Typography><Typography className="cardd-para">
              Our dedicated customer support team is always ready to assist you with any queries or concerns.
              Whether you need assistance with product information, 
              order tracking, or troubleshooting, we're here to provide prompt and reliable support.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>


        <Grid xs={4} sx={{marginTop:'-5vh'}}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Fast and Secure Shipping
              </Typography><Typography className="cardd-para">
              Experience peace of mind with our fast and secure shipping options. 
              GearUp Technologies ensures timely delivery of your orders while 
              maintaining the highest standards of security to safeguard your 
              purchases throughout the shipping process.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>


        <Grid xs={4} sx={{marginTop:'-5vh'}}>
        <div className='cardddd' >
          <div className="cardd">
            <div className="cardd-content">
              <Typography className="cardd-title">Commitment to Quality
              </Typography><Typography className="cardd-para">
              Trust in the quality of every product offered by GearUp Technologies. 
              We partner with reputable brands and conduct rigorous quality 
              checks to ensure that each item meets our stringent standards, 
              providing customers with reliable and long-lasting tech solutions.
              </Typography>
            </div>
          </div>
        </div>
          
        </Grid>

       
       </Grid>

       <Footer/>
        
       </div>
    
      
    



    

   
  );
};

export default CheckHome;
