import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '../Navbars/Dnavbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; // If you're using React Router
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function Register() {
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('');
  const [Email, setEmail] = useState('');
  const [Mnumber, setMnumber] = useState('');
  const [address, setAdress] = useState('');
  const [password, setPassword] = useState('');
  const [policy, setPolicy] = useState<boolean>(false);
  const [successmessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  {/* 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };*/}

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if(!Fname){
        alert('First name is required!')
      }
      if(!Lname){
        alert('Last name is required!')
      }
      if(!Email){
        alert('Email is required!')
      }
      if(!Mnumber || Mnumber.length == 10){
        alert('Mobile mumber should contain 10 digits')
      }
      if(!password || password.length < 8){
        alert('Password should contain less than 8 characters')
      }
      if(!address ){
        alert('Address is required!')
      }
    
      try {
        const response = await axios.post('http://localhost:8070/users/CreateUser', {
          Fname,
          Lname,
          Email,
          Mnumber,
          password,
          address,
          Checkbox,
        });
    
       
        console.log(response.data); // Log response data
    
        if (response.status === 200) {
          setSuccessMessage('Your post submitted successfully');
          setErrorMessage('');
          navigate({
            pathname: `/Login`,
          });
        }
      } catch (err) {
        console.error('Error:', err);
        setErrorMessage('An error occurred while submitting the form. Please try again.'); // Set error message
      }
    };

  return (
    <ThemeProvider theme={defaultTheme}>
          <Navbar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography >
         
          <Box onSubmit={handleSubmit} component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={Fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={Lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Mobile number"
                  name="phone"
                  value={Mnumber}
                  onChange={(e) => setMnumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Address"
                  label="Address"
                  name="adress"
                  value={address}
                  onChange={(e) => setAdress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="policy"
                    color="primary"
                    checked={policy || false} // Use the policy state variable as the checked prop
                    onChange={() => setPolicy((prevValue) => !prevValue)} // Handle the onChange event to update the policy state variable
                  />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link component={RouterLink} to="/Login" variant="body2">
              Already have an account? Sign in
            </Link>
              </Grid>
            </Grid>
          </Box>
       
        </Box>

         
          
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}