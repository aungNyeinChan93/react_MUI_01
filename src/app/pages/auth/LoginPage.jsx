import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
const LoginPage = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth="xs"
        disableGutters
        sx={{
          marginY: 20,
          backgroundColor: "primary.light",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography color="secondary.dark" align="center" variant="h5">
          LoginPage
        </Typography>
        <form>
          <TextField
            label="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={{ backgroundColor: "special.sec" }}
          />
          <TextField
            label="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={{ backgroundColor: "special.sec" }}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ marginTop: 2 }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default LoginPage;
