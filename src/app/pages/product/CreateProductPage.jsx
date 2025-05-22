import React, { useRef, useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const CreateProductPage = () => {
  const [productName, setProductName] = useState("Create Product");
  return (
    <React.Fragment>
      <Container
        maxWidth={"sm"}
        sx={{
          marginY: 2,
          backgroundColor: "primary.light",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography color="secondary.dark" align="center" variant="h5">
          CreateProductPage
        </Typography>
        <Container maxWidth="lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molelaudantium quia. Repellendus corrupti.
          </p>
          <TextField
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            label="Product Name"
            variant="outlined"
            fullWidth
            margin="normal"
            // autofocus
            // autoCapitalize="on"
            // error={productName === ""}
            sx={{ backgroundColor: "special.sec" }}
          />

          <Button
            variant="outlined"
            color="error"
            onClick={() => alert(`Product Name: ${productName}`)}
          >
            Submit
          </Button>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default CreateProductPage;
