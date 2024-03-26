import React from 'react'
import Navbar from '../Navbars/Navbar'
import { Button, Grid, Typography } from '@mui/material'
import Tvilla from '../images/Tvilla.avif'
import './List-with-us.css'
import Tapartment from '../images/TpropApartment.avif'
import Tlands from '../images/Tlands.avif'
import Thouse from '../images/Thouses.avif'
import Thotel from '../images/Thotels.avif'
import TofficeBuilding from '../images//TofficeBuilding.avif'
import TretailSpace from '../images/Tretailspace.avif'
import Tplantation from '../images/Tplantation&state.avif'
import Tfactory from '../images/Tfactory.avif'
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../Navbars/Footer'
export const ListwithUs= () => {


  return (
    <div className='covntainer'>
      <Navbar/>

        <Grid container xs={12}   style={{background:'white', minHeight: '40vh',display:'grid',placeItems:'center' }}>
        <Grid xs={9} style={{}} >
          <div >
            <Typography variant='h4'style={{marginTop:'10vh',fontWeight:'bold',fontFamily:' Georgia, serif'}}>Find you tech with us.</Typography>
            <Typography variant='body1'  color="text.secondary"style={{marginTop:'3vh'}}>
              GearUp ensures a seamless and profitable Tech
              buying experience through tailored
              strategies and a dedicated team focused on maximizing value.</Typography>
            <Button variant='contained' style={{marginTop:'3vh',marginBottom:'10vh'}}  
              component={RouterLink} to="/All-products">all techs</Button>
          </div>

        </Grid>
        
      </Grid>
      

      {/*Why listing with us */}
      <Grid container xs={12} style={{marginTop:'15vh',display:'grid',placeItems:'center' }}>
        <Grid xs={6}>      
        <Typography variant='h4' style={{fontWeight:'800'}}>Why Us?</Typography>
        </Grid>
      </Grid>

      <div className='listingCard' style={{marginBottom:'10vh'}}>
      <div className="cardddBox">
        <div className="carddd">
          <div className="h4">Wide Product Selection</div>
        
          <div className="contentt">
            <div className="h3">Wide Product Selection</div>
            <Typography variant='body1'  style={{fontSize:'15px'}}>
            At GearUp Technologies, we offer a vast array of the latest tech products, 
              ensuring customers have access to the most cutting-edge gadgets and accessories 
              for all their needs.</Typography>
          </div>
        </div>
      </div>

      <div className="cardddBox">
        <div className="carddd">
          <div className="h4">Competitive Pricing</div>
        
          <div className="contentt">
            <div className="h3">Local Market Knowledge</div>
            <Typography variant='body1'  style={{fontSize:'15px'}}>
            Enjoy competitive prices at GearUp Technologies, 
              where affordability meets quality. We strive to 
              provide our customers with the best value for their 
              money without compromising on excellence.</Typography>
            </div>
        </div>
      </div>

      <div className="cardddBox">
        <div className="carddd">
          <div className="h4">Dedicated Customer Support</div>
        
          <div className="contentt">
            <div className="h3">Dedicated Customer Support</div>
            <Typography variant='body1'  style={{fontSize:'15px'}}>
            Experience top-notch customer support throughout your journey with GearUp.
            Our dedicated team is always ready to address your questions,
            concerns. We prioritize open communication 
            and transparency to build lasting relationships with our clients.</Typography>          </div>
        </div>
      </div>
      
       
      </div>


 <Footer/>
        
    </div>
    
  )
}
