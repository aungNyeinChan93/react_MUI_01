import React, { useState } from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router";
import { Menu } from "@mui/icons-material";

export default function TestDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Menu fontSize="large" />
      </Button>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List sx={{ width: 250 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{ padding: 2, color: "red", marginBottom: 2 }}
          >
            MUI Project
          </Typography>
          <Link to={"/"}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to={"/products"}>
            <ListItem button>
              <ListItemText primary="Products" />
            </ListItem>
          </Link>
          <Link to={"/recipes"}>
            <ListItem button>
              <ListItemText primary="Recipes" />
            </ListItem>
          </Link>
          <Link to={"/notes"}>
            <ListItem button>
              <ListItemText primary="Notes" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
}
