import React, { useContext } from 'react';
import "./shop.css";
import { ShopContext } from '../../context/shop-context';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Favorite, FavoriteBorder, Share } from '@mui/icons-material';

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {addToCart, cartItems} =useContext(ShopContext);

  const cartItemAmount = cartItems[id];

//   const StyledCard = styled(Card)`
//   ${({ theme }) => `
//   cursor: pointer;
//   transition: ${theme.transitions.create(['transform'], {
//     duration: theme.transitions.duration.standard,
//   })};
//   &:hover {
//     transform: scale(0.5);
//   }
//   `}
// `;
  return (
 
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>


    <Card sx={{
      maxWidth: 250,
      margin: "0 auto",
      whiteSpace: 'nowrap',
      }}>
  
    <CardMedia className='CardMedia'
      component="img"
      height="200"
      sx={{objectFit: "contain", padding:"5px" }}
      image= {productImage}
      alt="Paella dish"
    />
      

    <CardContent sx={{padding:"0px 5px 5px 5px"}} >
      <Typography variant="h6" 
          color="text.secondary" sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden'}}>
        {productName}
      </Typography>
      <Typography variant="h6" color="text.dark">
       &#8358;{price}
      </Typography>

      <Button variant="outlined" onClick={()=> addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </Button>
    </CardContent>

    <CardActions disableSpacing sx={{ padding: 0,}}>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>

    </CardActions>
    </Card>
  


      
    </Grid>

  )
}
