import {Home,Checkroom, Settings, Cable, Laptop, PhoneIphone } from '@mui/icons-material'
import { Avatar, Divider, ListItemIcon, Menu, MenuItem, MenuList, Paper} from '@mui/material'
import React from 'react';
import { useState } from 'react';
import styled from "@emotion/styled";
import FashionList from '../Menulist/Fashion/fashion';



export const Sidebar = ( {mode, setMode}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ListItemText = styled("div")(() => ({
    width: "600px",
    margin:"10px"   
  }));

  return (
  
    <Paper sx={{
      padding:"0px", 
      width: 320,
      maxWidth: '100%', 
      height:"100%", 
      boxShadow:'1px 1px 2px grey',
      borderRadius:"10px" }}>
    <MenuList sx={{padding:"20px"}}>
      <MenuItem>
        <ListItemIcon>
          <Home fontSize="small" />
        </ListItemIcon>
        <ListItemText>Homepage</ListItemText>

        {/* <Button variant="contained" {...bindHover(popupState)}>
        Hover to open Menu
      </Button> */}
      {/* <HoverMenu
        sx={{
          padding: 0,
        }}
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: -28, horizontal: 265 }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem sx={{ 
          height: 435, 
          width: 812,
          padding: 0,
          margin: 0
          }}>
          <FashionList/>
        </MenuItem>
      </HoverMenu> */}
      </MenuItem>

      
      <MenuItem>
        <ListItemIcon>
          <Checkroom fontSize="small" />
        </ListItemIcon>
        <ListItemText         
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
          Fashion
        </ListItemText>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{ vertical: 80, horizontal: 438 }}
        >
          <MenuItem          
          sx={{ 
          height: 435, 
          width: 812,
          padding: 0,
          margin: 0,
          }}>
           <FashionList/>          
          </MenuItem>

        </Menu>

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
{/*     
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
      </MenuItem> */}
    
    
    </MenuList>   
  </Paper>

  )
}

export default Sidebar
