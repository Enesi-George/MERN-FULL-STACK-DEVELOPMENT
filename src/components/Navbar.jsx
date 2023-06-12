import styled from '@emotion/styled';
import { AppBar, Avatar,Box,  InputBase, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    // const Bar = styled('div')(()=>({
    //   Content: "''",
    //   width: "35px",
    //   border:"1px solid grey",
    //   margin: '3px',

    // }))

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
            <Typography variant ="h6" sx={{
              display:{xs:"none", sm:"none", md: "block"}, 
              cursor:"pointer"}} 
              onClick={()=> navigate("/")}>
                TECHy SHOPPy
            </Typography>



            <Search  > <InputBase sx={{display:{xs:"none", sm:"none", md:"block", lg:"block", xl:"block"}}} placeholder="Search..."/> </Search>
            <Icons>
                {/* <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>

                <Badge badgeContent={2} color="error">
                    <Notifications/>
                </Badge> */}

                <Avatar sx={{width: "30px", height: "30px", mr: '-15px', padding:"0px"}} alt="" src="" 
                onClick ={(e)=>setOpen(true)}/>
                <Link to="/signin" >
                  <Typography  sx={{color:"white"}}> Login/SignUp </Typography>
                  
                </Link>
            </Icons>
        </StyledToobar>

    </AppBar>
  )
}

export default Navbar
