import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import "./cart.css";
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const Cart = () => {
  const {cartItems, getTotalCartAmount} =useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();


  return (
    <div className="cart">
      <div>
        <h1>MyCart</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data = {product}/>;
          }          
        })} 
      </div>
      {totalAmount ?
        <Box >
        <p>Subtotal: &#8358; {totalAmount} </p>
        <Button sx={
          {fontSize:'20px', textDecoration:"none", color:"white", 
          backgroundColor:"Black", border:"2px solid black", borderRadius: "10px",
          margin:"10px"
          }} onClick={()=> navigate("/")}>Continue Shopping</Button>
        
        <Button  sx={
          {fontSize:'20px', textDecoration:"none", color:"white", 
          backgroundColor:"Black", border:"2px solid black", borderRadius: "10px",
          margin:"10px"
          }}>Checkout
        </Button>
      </Box> : <h4> Empty Cart</h4>
    }
    
    </div>
  )
}

