import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import {
  Typography,
  Paper,
  Grid,
  TextField,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import Homeimg5 from '../images/Homeimg5.avif';
import Navbar from '../Navbars/Navbar';
import Footer from '../Navbars/Footer';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateCartItems() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [listing, setListing] = useState<{ title: string; price: number; negotiable: boolean } | null>(null);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/Cart/GetbyId/${id}`);
        const cartData = response.data;
        setListing(cartData);
      } catch (error) {
        console.error('Error fetching meeting', error);
      }
    };

    fetchData();
  }, [id]);

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  const updateCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
        // Check if the quantity field is defined in the state, and if not, set it to a default value of 1
        const updatedQuantity = {
            quantity: quantity || 1,
        };

        console.log('Updated Quantity:', updatedQuantity); // Add this console log

        await axios.put(`http://localhost:8070/Cart/UpdateCart/${id}`, updatedQuantity);
        navigate('/Cart');
    } catch (error) {
        console.error('Error updating Quantity:', error);
    }
};



  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Typography
        variant="h3"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 600,
          padding: '30px',
          marginBottom: '-10vh',
          background: '',
        }}
        gutterBottom
      >
        All Products
      </Typography>

      <div style={{ background: 'white', margin: '10vh' }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3} sx={{ margin: '0 1rem', padding: '20px' }}>
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
                  <TextField
                    type="number"
                    label="Quantity"
                    value={quantity}
                    InputProps={{
                      inputProps: { min: 1 }, // Set minimum value for quantity
                    }}
                    onChange={handleQuantityChange}
                  />
                  <Button  variant="contained" onClick={updateCart}>Update quantity</Button>
                 
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}

export default UpdateCartItems;
