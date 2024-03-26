
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Navbar from '../Navbars/Navbar'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from '../Navbars/Footer';
import axios from 'axios'; 


function AddDelivery() {
  
  const [Rname, setRname] = useState('');
  const [Rcnum, setRcnum] = useState('');
  const [Daddress, setDaddress] = useState('');
  const [Dfee, setDfee] = useState('');
  const [DpostalC, setPostalC] = useState('');
  const [NearCity, setNearCity] = useState('');
  const [successmessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      
      const response = await axios.post('http://localhost:8070/Delivery/add-delivery', {
        Rname,
        Rcnum,
        Daddress,
        Dfee,
        DpostalC,
        NearCity,
      });

      console.log(response.status); 
      if (response.status === 200) { 
        setSuccessMessage('Your post submitted successfully'); 
        setErrorMessage(''); // Clear error message
        navigate({
          pathname: `/Listing-success`, 
        });
      } else {
        console.log(errorMessage); 
      }
    } catch (err) {
      console.error(err); 
      setErrorMessage('Error listing your post'); // Set error message
      setSuccessMessage(''); 
    }
  }

 
  const formStyles: React.CSSProperties = {
    marginTop: '5vh',
    minHeight: '50vh',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: 'white',
    maxWidth: '100%',
  };

  
  return (
    <Box>
      <Navbar />
      <div style={{ background: '#24263e', height: '50vh' }}>
        <Grid container xs={12}>
          <Grid xs={10}>
            <Typography variant='h3'
              style={{
                fontWeight: '700',
                padding: '20vh',
                color: 'white'
              }}>Add delivery details in here.</Typography>
            <Typography variant='subtitle1'
              style={{
                marginTop: '-37vh',
                fontWeight: '700',
                padding: '20vh',
                color: 'white'
              }} >
              Kindly furnish us with the necessary delivery details to 
              ensure smooth and accurate processing of your order, 
              including your full name, address, contact number, 
              and any specific delivery instructions you may have.</Typography>
          </Grid>
          <Grid xs={6}></Grid>
        </Grid>
      </div>
      <Grid
        container
        style={formStyles}
        sx={{
          padding: '20px',
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={8} md={8}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              
              <Grid item xs={4} style={{ padding: '20px' }}>
                <TextField
                  label="Recipient Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="Rname"
                  value={Rname}
                  onChange={(e) => setRname(e.target.value)} 
                />
              </Grid>
             
              <Grid item xs={4} style={{ padding: '20px' }}>
                <TextField
                  label="Recipient Contact Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="Rcnum"
                  type="Rcnum"
                  value={Rcnum}
                  onChange={(e) => setRcnum(e.target.value)}
                />
              </Grid>
         
              <Grid item xs={4} style={{ padding: '20px' }}>
                <TextField
                  label="Delivery Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="Daddress"
                  type="tel"
                  value={Daddress}
                  onChange={(e) => setDaddress(e.target.value)} 
                />
              </Grid>
              
              <Grid item xs={4} style={{ padding: '20px', marginTop: '4vh' }}>
                <TextField
                  label="Delivery Postal Code"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="DpostalC"
                  value={DpostalC}
                  onChange={(e) => setPostalC(e.target.value)} 
                />
              </Grid>
              
              <Grid item xs={4} style={{ padding: '20px', marginTop: '4vh' }}>
                <TextField
                  label="Near city"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="NearCity"
                  value={NearCity}
                  onChange={(e) => setNearCity(e.target.value)} 
                />
              </Grid>
              
              <Grid item xs={4} style={{ padding: '20px' }}>
                <Typography variant='subtitle1'>Delivery fee</Typography>
                <TextField
                  label="350"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="address"
                  value={Dfee}
                  disabled 
                />
              </Grid>
             
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </Grid>
              </Grid>
          </form>
        </Grid>
      </Grid>
      <Footer /> 
    </Box>
  );
}

export default AddDelivery; 

