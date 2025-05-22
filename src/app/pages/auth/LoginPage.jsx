import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const LoginPage = () => {
  const [remember, setRemember] = useState(false);
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
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
              }
              label="remember me"
              sx={{ color: "blue" }}
            />
          </FormControl>
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
