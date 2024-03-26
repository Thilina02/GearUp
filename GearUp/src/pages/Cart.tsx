import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import Navbar from '../Navbars/Navbar';
import Footer from '../Navbars/Footer';
import {
  Typography,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import Homeimg5 from '../images/Homeimg5.avif';

interface CartItem {
  _id: string;
  title: string;
  price: number;
  negotiable: boolean;
  quantity: number;
}

function Cart() {
  const { id } = useParams(); // Specify the type of 'id' as string
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/Cart/getall`);
        const cartData: CartItem[] = response.data.data;
        setCartItems(cartData);
      } catch (error) {
        console.error('Error fetching cart items', error);
      }
    };

    fetchCartItems();
  }, []);

  const renderNegotiable = (negotiable: boolean) => {
    return negotiable ? 'Yes' : 'No';
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8070/Cart/deleteCart/${id}`);
      setCartItems(cartItems.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item from cart', error);
    }
  };

  const handleUpdate = (id: string | number) => {
    navigate(`/Update-Cart/${id}`);
};

const handleNavigate = (id: string | number) => {
  navigate(`/add-delivery`);
};




  return (
    <div>
      <Navbar/>
    <div style={{ background: 'white', margin: '10vh' }}>
      
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Your cart</h1>
      <Grid container justifyContent="center" spacing={2}>
        {cartItems.map((item) => (
          <Grid item key={item._id} xs={12} sm={6} md={6} lg={3} sx={{ margin: '0 1rem', padding: '20px' }}>
            <Paper elevation={3}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia sx={{ height: 140 }} image={Homeimg5} title="House" />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {item.price}
                  </Typography>
                 
                  <Typography variant="body2" color="text.secondary">
                    Negotiable: {renderNegotiable(item.negotiable)}
                  </Typography>
                  <div style={{ border: '1px solid #ccc', padding: '8px', marginTop: '8px' }}>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item.quantity}
                    </Typography>
                  </div>
                </CardContent>
                <Button onClick={() => handleDelete(item._id)} variant="contained" color="error">
                  Delete
                </Button>
                <Button variant='contained'  onClick={() => handleUpdate(item._id)}>Edite qant</Button>
                <Button variant='contained'  onClick={() => handleNavigate(item._id)}>Confirm order</Button>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
     
    </div>
    <Button style={{marginLeft:'105vh'}} variant='contained'  >Back</Button>
    <Footer/>
    </div>
    
  );
}

export default Cart;
