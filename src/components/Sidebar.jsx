import { AccountBox, Article, Group, Home,Checkroom, Settings, Cable, Laptop, PhoneIphone } from '@mui/icons-material'
import { Avatar, Divider, ListItemIcon, MenuItem, MenuList, Paper} from '@mui/material'
import React from 'react';
import { useState } from 'react';
import styled from "@emotion/styled";


export const Sidebar = ( {mode, setMode}) => {
  const [open, setOpen] = useState(false);
  const ListItemText = styled("div")(() => ({
    width: "50px",
    margin:"10px"   
  }));
  return (
    <Paper  sx={{padding:"0px", width: 320, maxWidth: '100%', height:"100%", boxShadow:'1px 1px 2px grey', borderRadius:"10px" }}>
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
        onClick ={(e)=>setOpen(true)}/>
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    
    
    </MenuList>   
  </Paper>
    // <Box flex={1} p={2} 
    // sx={
    //   { display:{ xs:"none", sm: 'none', md:'none', lg: "block", xl: 'block'}, 
    //   borderRight:"2px solid gray"
    //   }
    //   }>
    //   <Box sx={{position: "fixed " }}>
    //   <nav aria-label="main mailbox folders">
    //     <List>
    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <Home />
    //           </ListItemIcon>
    //           <ListItemText primary="Homepage" />
    //         </ListItemButton>
    //       </ListItem>

    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <Article />
    //           </ListItemIcon>
    //           <ListItemText primary="Page" />
    //         </ListItemButton>
    //       </ListItem>

    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <Article />
    //           </ListItemIcon>
    //           <ListItemText primary="Article" />
    //         </ListItemButton>
    //       </ListItem>

    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <Group />
    //           </ListItemIcon>
    //           <ListItemText primary="Group" />
    //         </ListItemButton>
    //       </ListItem>

    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <Settings />
    //           </ListItemIcon>
    //           <ListItemText primary="Settings" />
    //         </ListItemButton>
    //       </ListItem>

    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <AccountBox />
    //           </ListItemIcon>
    //           <ListItemText primary="AccountBox" />
    //         </ListItemButton>
    //       </ListItem>
          
    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <ModeNight/>
    //           </ListItemIcon>

    //           <Switch onChange={(e)=> setMode(mode === "light" ? "dark" : "light")} />
    //         </ListItemButton>
    //       </ListItem>

    //     </List>
    //   </nav>

    //   </Box>
    // </Box>
  )
}

export default Sidebar
