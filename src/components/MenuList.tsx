import * as React from "react";
import styled from "@emotion/styled";
import { Button, Stack} from "@mui/material";
import Menu from "@mui/material/Menu";
import {Sidebar} from "./Sidebar";

export const DropDownMenu = ({mode, setMode})=> {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Bar = styled("div")(() => ({
    Content: "''",
    width: "35px",
    border: "1px solid grey",
    margin: "3px"
  }));

  const Dropdownbar = styled('div')(()=>({
    position: "absolute",
    height: '400px',

  }))

  return (
    <div>
      <Button
        sx={{ padding: "0px"}}
        id="menuList"
        aria-controls={open ? "menuList" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Stack
          direction="column"
          sx={{
            display: "flex", justifyContent:"center", alignItems: 'center',
            border: "1px solid grey",
            padding: "5px",
            margin: "0px",
            borderRadius: "10px",
            opacity: 0.9,
            backgroundColor: "#EAECEE",
            ":hover": { backgroundColor: "#F4F6F6", cursor: "pointer" }
          }}
        >
          <Bar />
          <Bar />
          <Bar />
        </Stack>
      </Button>
      <Menu
        id="menuList"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
      <Sidebar setMode={setMode} mode = {mode}/>

      </Menu>
    </div>
  );
}
