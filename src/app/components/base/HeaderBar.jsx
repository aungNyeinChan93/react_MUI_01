import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { format } from "date-fns";

const HeaderBar = () => {
  return (
    <React.Fragment>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: "secondary.main",
          width: "calc(100% - 240px)",
          padding: "0 20px",
        }}
      >
        <Toolbar>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            size="large"
            sx={{ mr: 2 }}
          >
            💀
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Project
            <span className="ms-6 text-[15px] text-green-300 font-medium fill-amber-400">
              {format(new Date(), "do MMMM Y")}
            </span>
          </Typography>
          <Typography variant="body1" color="inherit">
            Welcome to the MUI Project
          </Typography>
          <AvatarGroup max={4} sx={{ marginLeft: 2 }}>
            <Avatar
              variant="circular"
              alt="user"
              src="/images/avator_1.png"
              sx={{ width: 40, height: 40, marginLeft: 2 }}
            />
            <Avatar
              variant="circular"
              alt="user"
              src="/images/avator_2.png"
              sx={{ width: 40, height: 40, marginLeft: 2 }}
            />
            <Avatar
              variant="circular"
              alt="user"
              src="/images/avator_3.jpg"
              sx={{ width: 40, height: 40, marginLeft: 2 }}
            />
          </AvatarGroup>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default HeaderBar;
