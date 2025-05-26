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
import {
  Menu,
  HomeMiniOutlined,
  ProductionQuantityLimitsOutlined,
  CookieRounded,
  NoteRounded,
} from "@mui/icons-material";

export default function TestDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Button onClick={() => setOpen(true)}>
          <Menu fontSize="large" />
        </Button>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Typography
            variant="h5"
            fontWeight={"bold"}
            align="center"
            sx={{ padding: 2, color: "red", marginY: 1 }}
          >
            MUI Project
          </Typography>
          <List sx={{ width: 220 }}>
            <Link to={"/"}>
              <ListItem button>
                <HomeMiniOutlined fontSize="medium" sx={{ marginRight: 1 }} />
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to={"/products"}>
              <ListItem button>
                <ProductionQuantityLimitsOutlined sx={{ marginRight: 1 }} />
                <ListItemText primary="Products" />
              </ListItem>
            </Link>
            <Link to={"/recipes"}>
              <ListItem button>
                <CookieRounded sx={{ marginRight: 1 }} />
                <ListItemText primary="Recipes" />
              </ListItem>
            </Link>
            <Link to={"/notes"}>
              <ListItem button>
                <NoteRounded sx={{ marginRight: 1 }} />
                <ListItemText primary="Notes" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
    </>
  );
}
