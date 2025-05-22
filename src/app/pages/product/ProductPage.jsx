import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { useGetProductsQuery } from "../../services/productData";

const ProductPage = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  console.log(products);

  if (isLoading) {
    return (
      <div>
        <Box
          component={"p"}
          sx={{ color: "red", textAlign: "center", fontSize: "2rem" }}
        >
          Loading . . .
        </Box>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={3} columns={16}>
          {products &&
            products.map((product) => {
              return (
                <Grid size={{ xs: 16, sm: 8, md: 4 }} key={product.id}>
                  {product.title}
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ProductPage;
