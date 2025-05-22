import React from "react";
import {
  Button,
  Stack,
  Rating,
  Typography,
  Container,
  Box,
  CssBaseline,
} from "@mui/material";
import { Css, LoginTwoTone, LogoutRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const HomePage = () => {
  const ml = "100px";
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <React.Fragment>
      <Container maxWidth="md" disableGutters>
        <CssBaseline />

        <h1>HomePage</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          nostrum veritatis molestias maiores. Sapiente est, accusantium officia
          voluptate culpa veritatis, assumenda odit sunt distinctio consequuntur
          repellat perferendis voluptatibus, dolor vitae?
        </p>
        <Button variant="contained" color="secondary" size="large">
          Click Me
        </Button>
        <Box
          color="secondary.dark"
          mt={3}
          p={2}
          borderRadius={"10px"}
          bgcolor={"primary.light"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          modi repellendus quaerat.
        </Box>

        <br />
        <br />
        <Stack spacing={4} direction={"column-reverse"}>
          <Rating defaultValue={3} precision={0.1} />
          <div className="flex items-center justify-center">
            Average - <Rating defaultValue={4} readOnly />
          </div>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            alignItems={"center"}
          >
            This is a heading
          </Typography>
          <Typography variant="h5" component="section" gutterBottom>
            This is a heading
          </Typography>
        </Stack>

        <Button
          variant="contained"
          color="secondary"
          size="medium"
          startIcon={<LoginTwoTone color="error" fontSize="small" />}
        >
          Login
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          endIcon={<LogoutRounded color="error" fontSize="small" />}
        >
          logout
        </Button>

        <Stack
          spacing={2}
          marginLeft={ml}
          mt={"10px"}
          direction="row"
          alignItems="center"
        >
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            endIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files[0])}
              multiple
            />
          </Button>
        </Stack>

        <Typography
          mt={3}
          variant="h5"
          color="secondary"
          gutterBottom
          align={"center"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
        </Typography>
        <Box
          sx={{ bgcolor: "gray", height: "100vh", borderRadius: "20px" }}
          textAlign={"center"}
          padding={"20px"}
          borderRadius={"10px"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          sed maiores optio?
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
