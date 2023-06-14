import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/Homepage/shop';
import { ShopContextProvider } from './context/shop-context';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import {SignIn} from './pages/registeration/signIn';
import {SignUp} from './pages/registeration/signup';


function App() {
  const [mode, setMode]= useState('light');

  const darkTheme = createTheme({
    palette:{
      mode: mode,
    }
  });
  return (
    <ThemeProvider theme ={darkTheme}>
          {/* <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment> */}
      <Box className="App" setMode={setMode} mode = {mode}  
      color={"text.primary"} > 

      <ShopContextProvider>

      <Router setMode={setMode} mode = {mode}>



        <Navbar/>

      <React.Fragment>
        <CssBaseline />

        <Container maxWidth="lg" sx={{height:"100vh"}}>
          <Routes >
              <Route path="/" element= {<Shop setMode={setMode} mode = {mode}/>} />
              <Route path="/cart"  element = {<Cart/>}/>
              <Route path="/SignIn"  element = {<SignIn/>}/>
              <Route path="/SignUp"  element = {<SignUp/>}/>

            </Routes>
        </Container>
      </React.Fragment> 
        {/* <Routes >
          <Route path="/" element= {<Shop setMode={setMode} mode = {mode}/>} />
          <Route path="/cart"  element = {<Cart/>}/>
          <Route path="/SignIn"  element = {<SignIn/>}/>
          <Route path="/SignUp"  element = {<SignUp/>}/>

        </Routes> */}
      </Router>

      </ShopContextProvider>

 
    </Box>
    </ThemeProvider>

  );
}

export default App;
