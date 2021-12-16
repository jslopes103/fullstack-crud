import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React, { useState } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

function Menu() {
  // Controlling side Drawer with useState
  const [state, setState] = useState({
    left: false,
  });

  // Using this function to know when to open and when not
  const toggleDrawer = (anchor, open) => (event) => {
    // One of the following events will not trigger
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    // else, set state
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Contacts
          </Typography>
        </Toolbar>
        <React.Fragment key="left">
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer("left", false)}
              onKeyDown={toggleDrawer("left", false)}
            >
              <ListItem button component="a" href="/" key="List contacts">
                <ListItemIcon>
                  <PersonSearchIcon />
                </ListItemIcon>
                <ListItemText primary="List contacts" />
              </ListItem>

              <ListItem button component="a" href="/add/_add" key="New contact">
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="New Contact" />
              </ListItem>
            </Box>
          </Drawer>
        </React.Fragment>
      </AppBar>
    </div>
  );
}

export default Menu;
