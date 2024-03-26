// App.tsx

// Importing necessary modules from React and react-router-dom
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Router components for routing
import './App.css'; // Importing CSS file
import { UserContextProvider } from './contex/userContex'; // Importing UserContextProvider
import UserProfile from './pages/UserProfile'; // Importing UserProfile component

// Importing various components from pages directory
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import { ListwithUs } from './pages/List-with-Us';
import UpdateCartItems from './pages/updateCartItems';
import SuccessListing from './pages/SuccessListing';
import ListaItem from './pages/List-a-Item';
import Dashboard from './pages/Dashboard';
import Allproducts from './pages/All-products';
import Cart from './pages/Cart';
import AddDelivery from './pages/addDelivery';
import Successpurchase from './pages/Successpurchase';
import Profile from './pages/Profile';

// Importing ThemeProvider and createTheme from Material-UI
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';

// Your custom theme
const theme = createTheme();

function App() {
  return (
    // Wrap the entire app with ThemeProvider and provide the theme
    <ThemeProvider theme={theme}>
      {/* Providing UserContextProvider for user-related context */}
      <UserContextProvider>
        {/* Setting up routing using react-router-dom */}
        <Router>
          <Routes>
            {/* Routes for different pages */}
            <Route path='/' element={<Home />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/List-with-us' element={<ListwithUs />} />
            <Route path='/Listing-success' element={<SuccessListing />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/List-Item' element={<ListaItem />} />
            <Route path='/All-products' element={<Allproducts />} />
            <Route path='/User-Profile/:id' element={<UserProfile />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Update-Cart/:id' element={<UpdateCartItems />} />
            <Route path='/add-delivery' element={<AddDelivery />} />
            <Route path='/Success-purchase' element={<Successpurchase />} />
            <Route path='/Profile/:id' element={<Profile />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </ThemeProvider>
  );
}

// Exporting the App component as default
export default App;
