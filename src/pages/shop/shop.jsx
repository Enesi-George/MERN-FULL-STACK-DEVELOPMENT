import React, { useState } from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import "./shop.css";
import { Box, Divider, Grid, Stack } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import styled from '@emotion/styled';
import { Slides } from '../../components/carouselSlides/Slider';

export const Shop = ({mode, setMode}) => {
  const CollapseMenu = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display:"none",
    },

  }));
 
  return ( 

    <Box>
      <Stack direction="row"  justifyContent="space-between">
           
      <CollapseMenu>
      <Sidebar setMode={setMode} mode = {mode} />      
      </CollapseMenu>      
      <Box flex={4} sx={{ marginLeft: "20px"}}>
        <Slides/>
      </Box>
      </Stack>

      <Divider/>
      <Divider/>
      <Divider/>

      <Box  sx={{padding:"10px"}} >
      <Grid container spacing={6} > 
        {PRODUCTS.map((product)=> <Product data ={product}/>)}
      </Grid>
      </Box>
    
    </Box>




 
  )
}
