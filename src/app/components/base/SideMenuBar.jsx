import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import {
  HomeMaxRounded,
  ProductionQuantityLimitsRounded,
  CookieRounded,
  NoteRounded,
} from "@mui/icons-material";
import { Link } from "react-router";

const SideMenuBar = () => {
  return (
    <React.Fragment>
      <Drawer variant="permanent" anchor="left">
        <Typography
          variant="h6"
          align="center"
          color="error"
          sx={{ marginY: 2 }}
        >
          SideBar Menu
        </Typography>
        <List component={"nav"} sx={{ width: 200 }}>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeMaxRounded fontSize="medium" color="info" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button component={Link} to="/products">
            <ListItemIcon>
              <ProductionQuantityLimitsRounded fontSize="medium" color="info" />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>

          <ListItem button component={Link} to="/recipes">
            <ListItemIcon>
              <CookieRounded fontSize="medium" color="info" />
            </ListItemIcon>
            <ListItemText primary="Recipes" />
          </ListItem>

          <ListItem button component={Link} to="/notes">
            <ListItemIcon>
              <NoteRounded fontSize="medium" color="info" />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default SideMenuBar;
