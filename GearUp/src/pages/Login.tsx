import React, { ChangeEvent, useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // If you're using React Router
import SigninImg from '../images/SignIn.avif';
import Navbar from '../Navbars/Dnavbar';
import { UserContext } from '../contex/userContex';

import axios from 'axios';

function Login() {
  const navigate = useNavigate(); // Hook for navigating to other pages
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({
    Email: '',
    password: '',
  });

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const { Email, password } = data;
    navigate('/Dashboard');
  
    try {
      const response = await axios.post('http://localhost:8070/users/login', {
        Email,
        password,
      });
     
      if (response.data.error) {
        // If the server returns an error message
        alert(response.data.error);
      } else {
        const { success, user } = response.data; // Assuming the response contains a 'success' field indicating authentication success and a 'user' field containing user data
  
        if (success) {
          // Authentication successful
          alert('Login successful');
          setUser(user);
          navigate('/Dashboard');
        
        } else {
          // Authentication failed
          alert('Invalid email or password. Please try again.');
        }
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while logging in. Please try again.');
    }
  };
  

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const hashPassword = async (password : string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
    return hashedPassword;
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Navbar />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${SigninImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={loginUser} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Email"
                label="Email Address"
                name="Email"
                autoComplete="Email"
                autoFocus
                value={data.Email}
                onChange={(e) => setData({ ...data, Email: e.target.value })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} to="/register" variant="body2">
                    Don't have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
