import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const CreateProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [description, setDescription] = useState(false);

  const submitForm = () => {
    if (productName.length === 0) {
      setProductNameError(true);
      setProductName("Please enter a product name");
    } else {
      setProductNameError(false);
      alert(`Product Name: ${productName} \nDescription: ${description}`);
    }
  };

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
          <TextField
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            label="Product Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            // autofocus
            // autoCapitalize="on"
            error={productNameError}
            sx={{ backgroundColor: "special.sec" }}
          />
          <TextField
            label="Product Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            sx={{ backgroundColor: "special.sec" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant="outlined" color="error" onClick={submitForm}>
            Submit
          </Button>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default CreateProductPage;
