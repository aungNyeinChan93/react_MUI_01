import React from "react";
import { Container, Stack, Box, Grid, Button } from "@mui/material";
import { pink, amber } from "@mui/material/colors";
import { LoginRounded, Adb } from "@mui/icons-material";

const IconPage = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth="md"
        sx={{ marginTop: "20px", background: amber[300] }}
        disableGutters
      >
        <LoginRounded color="secondary" fontSize="large" />
        <LoginRounded sx={{ color: amber[400] }} fontSize="large" />
        <Adb color="warning" />
        <Adb color="info" fontSize="large" />
        {/* <Button className={classes.btn}>Submit</Button> */}
      </Container>

      <Stack
        spacing={{ xs: 1, md: 3 }}
        direction={{ xs: "column", md: "row" }}
        useFlexGap
        sx={{
          marginTop: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component={"span"}
          sx={{
            width: "100px",
            background: pink[500],
            textAlign: "center",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          one
        </Box>
        <Box
          component={"span"}
          sx={{
            width: "100px",
            background: pink[500],
            textAlign: "center",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          one
        </Box>
        <Box
          component={"span"}
          sx={{
            width: "100px",
            background: pink[500],
            textAlign: "center",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          one
        </Box>
        <p style={{ width: "100px", background: "red", textAlign: "center" }}>
          one
        </p>
      </Stack>

      {/* grid */}
      <Grid container spacing={2} marginTop={3} columns={16}>
        <Grid size={{ xs: 12, md: 4 }}>Item 1</Grid>
        <Grid size={{ xs: 12, md: 4 }}>Item 1</Grid>
        <Grid size={{ xs: 12, md: 4 }}>Item 1</Grid>
        <Grid size={{ xs: 12, md: 4 }}>Item 1</Grid>
        <Grid offset={3} size={{ xs: 12, md: 4 }}>
          Item 1
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default IconPage;
