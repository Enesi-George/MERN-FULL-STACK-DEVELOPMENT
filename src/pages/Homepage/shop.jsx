import { PRODUCTS } from '../../products';
import { Product } from './product';
import "./shop.css";
import { Box, Grid, Stack } from '@mui/material';
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

    <Box maxWidth={'100%'}>
      <Stack direction="row"  justifyContent="space-between" sx={{mb:'0px'}}>
           
      <CollapseMenu>
      <Sidebar setMode={setMode} mode = {mode} />      
      </CollapseMenu>  
          
      <Box flex={4} sx={{ marginLeft: "20px"}}>
        <Slides/>
      </Box>
      </Stack>

      <Box  sx={{
        padding:"0px 0px 50px 0px", 
        mt:"50px",
        border:'2px solid #C8C8C8', 
        borderRadius:"10px"}} >

          <Box sx={{ 
            fontSize:'25px', 
            padding: '5px', 
            borderRadius:"10px",
            background:"linear-gradient(135deg, #ff9900 37%, #0066ff 37%)",
            mb:"10px"}} >
              Newer Items
          </Box>
          
      <Grid container spacing={6} > 
        {PRODUCTS.map((product)=> <Product data ={product}/>)}
      </Grid>
      </Box>
    
    </Box>

  )
}
