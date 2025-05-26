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
import { menuLists } from "../../helpers/MenuLists";

const SideMenuBar = () => {
  return (
    <React.Fragment>
      <div>
        <Drawer variant="permanent" anchor="left">
          <Typography
            variant="h6"
            align="center"
            color="error"
            sx={{ marginY: 2 }}
          >
            MUI Menu
          </Typography>
          <List component={"nav"} sx={{ width: 200 }}>
            {menuLists?.map((menu) => {
              return (
                <ListItem
                  key={menu.name}
                  button
                  component={Link}
                  to={menu.path}
                >
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default SideMenuBar;
