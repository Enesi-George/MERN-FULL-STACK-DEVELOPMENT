import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
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
      <Box className="App" bgcolor={"background.default"} color={"text.primary"}>
      <ShopContextProvider>
      <Router setMode={setMode} mode = {mode}>
        <Navbar/>

        
        <Routes >
          <Route path="/" element= {<Shop setMode={setMode} mode = {mode}/>} />
          <Route path="/cart"  element = {<Cart/>}/>
          <Route path="/SignIn"  element = {<SignIn/>}/>
          <Route path="/SignUp"  element = {<SignUp/>}/>

        </Routes>
      </Router>

      </ShopContextProvider>

 
    </Box>
    </ThemeProvider>

  );
}

export default App;
