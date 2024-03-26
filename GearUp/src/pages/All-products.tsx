import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import Homeimg5 from '../images/Homeimg5.avif';
import Navbar from '../Navbars/Navbar';
import Footer from '../Navbars/Footer';
import { useNavigate } from 'react-router-dom';

interface Listing {
  _id: string;
  title: string;
  price: number;
  negotiable: boolean;
}

function AllProducts() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredResults, setFilteredResults] = useState<Listing[]>([]);
  const [quantity, setQuantity] = useState<{ [key: string]: number }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8070/RentProperties/fetch-renting');
        console.log(response);
        setListings(response.data);
        setFilteredResults(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCartBackend = async (id: string, quantity: number) => {
    try {
      const selectedListing = listings.find(listing => listing._id === id);
  
      // Make a POST request to your backend API with product details and quantity
      await axios.post('http://localhost:8070/Cart/add-to-cart', {
        productId: id,
        title: selectedListing?.title,
        price: selectedListing?.price,
        negotiable: selectedListing?.negotiable,
        quantity: quantity,
      });
  
      // Navigate to cart page after adding item to cart
      navigate('/Cart');
    } catch (error) {
      console.error('Error adding item to cart:', error);
      // Handle error scenario, show error message, etc.
    }
  };
  
  const handleQuantityChange = (id: string, quantity: number) => {
    setQuantity(prevState => ({
      ...prevState,
      [id]: quantity,
    }));
  };

  return (
    <div>
      <Navbar/>

      <Typography variant="h3" 
      style={{display:'flex',justifyContent:'center',alignItems:'center', 
      fontWeight:600,padding:'30px',marginBottom:'-10vh',
      background:''}} gutterBottom>
       All Products
      </Typography>

      <div  style={{background:'white',margin:'10vh'}}>
      <Grid container justifyContent="center" spacing={2}>
        {filteredResults.map((listing) => (
          <Grid item key={listing._id} xs={12} sm={6} md={6} lg={3} 
          sx={{ margin: '0 1rem', padding:'20px'}}>
            <Paper elevation={3}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia sx={{ height: 140 }} image={Homeimg5} title="House" />
                <CardContent>
                  <Typography variant="h6">{listing.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                     Price: {listing.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Negotiable: {listing.negotiable ? 'Yes' : 'No'}
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" onClick={() => addToCartBackend(listing._id, quantity[listing._id] || 1)}>Add to cart</Button>

                  <TextField
                    type="number"
                    label="Quantity"
                    value={quantity[listing._id] || 1}
                    InputProps={{
                      inputProps: { min: 1 }, // Set minimum value for quantity
                    }}
                    onChange={(e) => handleQuantityChange(listing._id, parseInt(e.target.value))}
                  />
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
      </div>

      <Footer/>
    </div>
  );
}

export default AllProducts;
