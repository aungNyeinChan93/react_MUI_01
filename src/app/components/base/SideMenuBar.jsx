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

import { Link, NavLink, useNavigate } from "react-router";
import { menuLists } from "../../helpers/MenuLists";
import { useLocation } from "react-router";

const SideMenuBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <React.Fragment>
      <Drawer variant="permanent" anchor="left">
        <Typography
          variant="h6"
          align="center"
          color="error"
          sx={{ marginY: 2 }}
        >
          MUI Menu
        </Typography>
        <List component={"ul"} sx={{ width: 240, padding: 0 }}>
          {menuLists?.map((menu) => {
            return (
              // <ListItem button key={menu.name} component={Link}  to={menu.path}>
              <ListItem
                button
                key={menu.name}
                onClick={() => navigate(menu.path)}
                sx={{
                  bgcolor:
                    location.pathname === menu.path ? "#f0f0f0" : "inherit",
                }}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default SideMenuBar;
