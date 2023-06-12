import React, { useContext } from 'react';
import "./shop.css";
import { ShopContext } from '../../context/shop-context';
import { Badge, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Fab, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Favorite, FavoriteBorder, Share, ShoppingCart } from '@mui/icons-material';

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
 
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12} >


    <Card sx={{
      maxWidth: 250,
      margin: "0 auto",
      whiteSpace: 'nowrap'}}>
  
    <CardMedia className='CardMedia'
      component="img"
      height="200"
      sx={{objectFit: "contain", padding:"5px" }}
      image= {productImage}
      alt="Paella dish"
    />
      

    <CardContent >
      <Typography variant="h6" 
          color="text.secondary" 
          sx={{
          textOverflow: 'ellipsis',
          textAlign:"center",
          overflow: 'hidden'}}>
        {productName}
      </Typography>
      <Typography variant="h6" color="text.dark" textAlign="center">
       &#8358;{price}
      </Typography>

      <Button variant="outlined"  onClick={()=> addToCart(id)} margin = "0 auto"
      sx={{
        margin: '0 auto',
        width:"100%"

      }}>
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

    <Tooltip title="Checkout" sx={{position: "fixed", border:"2px solid yellow", boxShadow:"none",  height: 80, width: 80, bottom: 50, right: 30, margin: "30px"}} >
            <Fab color="primary" aria-label="Checkout">
              <Badge color="error" >
                <Link to="/cart" textDecoration="none" >
                  <ShoppingCart sx={{fontSize: 50, color:"white"}}/>
                </Link>
                                
              </Badge>
            
            </Fab>
        </Tooltip>
  


      
    </Grid>

  )
}
