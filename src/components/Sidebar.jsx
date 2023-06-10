import { AccountBox, Article, Group, Home, ModeNight, Settings } from '@mui/icons-material'
import { Avatar, Divider, ListItemIcon, MenuItem, MenuList, Paper, Switch,} from '@mui/material'
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
    <Paper  sx={{padding:"0px", width: 320, maxWidth: '100%', height:"100%", boxShadow:'5px 5px 5px grey' }}>
    <MenuList sx={{padding:"20px"}}>
      <MenuItem>
        <ListItemIcon>
          <Home fontSize="small" />
        </ListItemIcon>
        <ListItemText>Homepage</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Article fontSize="small" />
        </ListItemIcon>
        <ListItemText>Pages</ListItemText>

      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <AccountBox fontSize="small" />
        </ListItemIcon>
        <ListItemText>AccountBox</ListItemText>
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <Group fontSize="small" />
        </ListItemIcon>
        <ListItemText>Group</ListItemText>
      </MenuItem>
      

      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </MenuItem>
    
      <MenuItem>
        <ListItemIcon>
          <ModeNight fontSize="small" />
        </ListItemIcon>
        <Switch onChange={(e)=> setMode(mode === "light" ? "dark" : "light")} />
      </MenuItem>
    
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
