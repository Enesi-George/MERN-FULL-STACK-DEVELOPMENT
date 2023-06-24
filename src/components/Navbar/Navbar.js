import * as React from 'react';
import '../../App.css'
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Home,Checkroom, Settings, Cable, Laptop, PhoneIphone} from '@mui/icons-material'
import { Avatar, Divider, Icon, ListItemIcon, MenuItem, MenuList,Tooltip,styled} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import HubIcon from '@mui/icons-material/Hub';
import axios from 'axios';
import {useState} from 'react';


const drawerWidth = 220;
 const Icons = styled(Box)(({theme}) =>({
    display: "flex",
    gap: "20px",
    alignItems: 'center'

 }));

 const ListItemText = styled("div")(() => ({
  width: "50px",
  margin:"10px",
  fontWeight: 'light',
  color: 'black'  
}));
const LinkStyleWrapper = styled("a")((theme)=>({
  textDecoration: "none !important"
}));

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [name, setName] = useState();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  // const userId = async()=>{
  //   await axios.get("http://localhost:3000/api/v1/users/login",{name})
  //   .then(res=>{res.data.name})
  //   .catch(err=>{console.log(err)})
  // } 

  return (
    <Box sx={{ display: 'flex', marginBottom: '80px' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{bgcolor:'#29a3a3'}}>
        <Toolbar>

          <Icon sx={{display:{xs:'none',md:'block'}}} >
            <HubIcon fontSize="30px" />
          </Icon>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
          <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, textAlign:'center' }}
          >
            <Link className='Link' to='/'>
              <Typography fontSize={40} fontWeight={'bold'} > FidTech.com</Typography>
              
              </Link>
           
          </Typography>

          <Box>
            <Icons >
                 {/* <Badge badgeContent={4} color="error">
                     <Mail />
                 </Badge>

                 <Badge badgeContent={2} color="error">
                     <Notifications/>
                 </Badge> */}
                <Tooltip title="Login/Signup">
                  <IconButton href="/login">
                  <Avatar sx={{
                  width: "30px", 
                  height: "30px", 
                  mr: '-15px', 
                  padding:"0px"}} alt="" src="" 
                  />
                  </IconButton>
                </Tooltip>


                  <LinkStyleWrapper>
                    <Link className='Link' to="/login" >
                    <Typography sx={{color:"white", display: {xs: 'none', md:'block' }}}> Login/SignUp </Typography>
                    
                  </Link>
                  
                  </LinkStyleWrapper>

            </Icons>

          </Box>

        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md:'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop:'64px', bgcolor:'#29a3a3' },
          }}
        >
          {/* {drawer} */}

          <MenuList sx={{padding:"20px"}}>
      <MenuItem>
        <ListItemIcon>
          <Home fontSize="small" />
        </ListItemIcon>
        <ListItemText>Homepage</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Checkroom fontSize="small" />
        </ListItemIcon>
        <ListItemText>Fashion</ListItemText>

      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PhoneIphone fontSize="small" />
        </ListItemIcon>
        <ListItemText>Phones</ListItemText>
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <Laptop fontSize="small" />
        </ListItemIcon>
        <ListItemText>Computers</ListItemText>
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <Cable fontSize="small" />
        </ListItemIcon>
        <ListItemText>Electronics</ListItemText>
      </MenuItem>
      

      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </MenuItem>
    
      {/* <MenuItem>
        <ListItemIcon>
          <ModeNight fontSize="small" />
        </ListItemIcon>
        <Switch onChange={(e)=> setMode(mode === "light" ? "dark" : "light")} />
      </MenuItem> */}
    
      <MenuItem>
        <ListItemIcon>
        <Avatar sx={{width: "30px", height: "30px"}} alt="Gemy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm-KJMECWJvjbROgmX9cEk8JNFy9lrYNrBP1FV7oZPw&s" 
     />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    
    
    </MenuList>  
        </Drawer>
      </Box>

    </Box>
  );
}

export default Navbar;

// import styled from '@emotion/styled';
// import { AppBar, Avatar,Box,  InputBase, Toolbar, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {DropDownMenu} from './MenuList.tsx';


// const StyledToobar = styled(Toolbar)({
//     display: "flex",
//     justifyContent: "space-between"
// })

// const Search = styled("div")(({theme}) =>({
//     backgroundColor: "White",
//     padding: "0 10px",
//     width:"40%",
//     borderRadius: "5px"

// }))

// const Icons = styled(Box)(({theme}) =>({
//    display: "flex",
//    gap: "20px",
//    alignItems: 'center'

// }))

// export const Navbar = (props) => {
    
//     const [open, setOpen] = useState(false);
//     const navigate = useNavigate();

//     // const Bar = styled('div')(()=>({
//     //   Content: "''",
//     //   width: "35px",
//     //   border:"1px solid grey",
//     //   margin: '3px',

//     // }))

//     const CollapseMenu = styled('div')(({ theme }) => ({
//       [theme.breakpoints.up('lg')]: {
//         display:"none",
//       },
//       [theme.breakpoints.between('xs','md')]: {
//         display:"block",
//       },
      
//     }));


//   return (
//     <AppBar sx={{position: 'sticky'}}>
//         <StyledToobar>
//         <CollapseMenu>
//           <DropDownMenu />
//             {/* <Stack  direction="column" 
//               sx={{
//                   border:"1px solid grey", padding:"10px",
//                   borderRadius:"10px",opacity: 0.9,
//                   backgroundColor:"#EAECEE", ":hover":{backgroundColor:'#F4F6F6', cursor: "pointer"},                
//                   }}>
//               <Bar sx={{display:{xs:"block", sm:"none"}}}/>
//               <Bar sx={{display:{xs:"block", sm:"none"}}}/>
//               <Bar sx={{display:{xs:"block", sm:"none"}}}/>
//             </Stack> */}
//             </CollapseMenu>
//             <Typography variant ="h6" sx={{
//               display:{xs:"none", sm:"none", md: "block"}, 
//               cursor:"pointer"}} 
//               onClick={()=> navigate("/")}>
//                 TECHy SHOPPy
//             </Typography>



//             <Search  > <InputBase sx={{display:{xs:"none", sm:"none", md:"block", lg:"block", xl:"block"}}} placeholder="Search..."/> </Search>
//             <Icons>
//                 {/* <Badge badgeContent={4} color="error">
//                     <Mail />
//                 </Badge>

//                 <Badge badgeContent={2} color="error">
//                     <Notifications/>
//                 </Badge> */}

//                 <Avatar sx={{width: "30px", height: "30px", mr: '-15px', padding:"0px"}} alt="" src="" 
//                 onClick ={(e)=>setOpen(true)}/>
//                 <Link to="/signin" >
//                   <Typography  sx={{color:"white"}}> Login/SignUp </Typography>
                  
//                 </Link>
//             </Icons>
//         </StyledToobar>

//     </AppBar>
//   )
// }

// export default Navbar
