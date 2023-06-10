import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, Fab, InputBase, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Mail, Notifications, ShoppingCart, } from '@mui/icons-material';
import {DropDownMenu} from './MenuList.tsx';


const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({theme}) =>({
    backgroundColor: "White",
    padding: "0 10px",
    width:"40%",
    borderRadius: "5px"

}))

const Icons = styled(Box)(({theme}) =>({
   display: "flex",
   gap: "20px",
   alignItems: 'center'

}))

export const Navbar = (props) => {
    
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const Bar = styled('div')(()=>({
      Content: "''",
      width: "35px",
      border:"1px solid grey",
      margin: '3px',

    }))

    const CollapseMenu = styled('div')(({ theme }) => ({
      [theme.breakpoints.up('lg')]: {
        display:"none",
      },
      [theme.breakpoints.between('xs','md')]: {
        display:"block",
      },
      
    }));


  return (
    <AppBar sx={{position: 'sticky'}}>
        <StyledToobar>
        <CollapseMenu>
          <DropDownMenu />
            {/* <Stack  direction="column" 
              sx={{
                  border:"1px solid grey", padding:"10px",
                  borderRadius:"10px",opacity: 0.9,
                  backgroundColor:"#EAECEE", ":hover":{backgroundColor:'#F4F6F6', cursor: "pointer"},                
                  }}>
              <Bar sx={{display:{xs:"block", sm:"none"}}}/>
              <Bar sx={{display:{xs:"block", sm:"none"}}}/>
              <Bar sx={{display:{xs:"block", sm:"none"}}}/>
            </Stack> */}
            </CollapseMenu>
            <Typography variant ="h6" sx={{display:{xs:"none", sm:"none", md: "block"}, cursor:"pointer"}} onClick={()=> navigate("/")}>
                TECHy SHOPPy
            </Typography>



            <Search  > <InputBase sx={{display:{xs:"none", sm:"none", md:"block", lg:"block", xl:"block"}}} placeholder="Search..."/> </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>

                <Badge badgeContent={2} color="error">
                    <Notifications/>
                </Badge>

                <Avatar sx={{width: "30px", height: "30px"}} alt="Gemy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm-KJMECWJvjbROgmX9cEk8JNFy9lrYNrBP1FV7oZPw&s" 
                onClick ={(e)=>setOpen(true)}/>

            </Icons>
        </StyledToobar>
        <Tooltip  title="Checkout" sx={{position: "fixed", border:"2px solid yellow",  height: 80, width: 80, bottom: 0, right: 0, margin: "30px"}} >
            <Fab color="primary" aria-label="Checkout">
              <Badge color="error" >
                <Link to="/cart" textDecoration="none" >
                  <ShoppingCart sx={{fontSize: 50, color:"white"}}/>
                </Link>
                                
              </Badge>
            
            </Fab>
        </Tooltip>
    </AppBar>
  )
}

export default Navbar
