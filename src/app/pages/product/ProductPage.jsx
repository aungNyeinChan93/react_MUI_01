import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { useGetProductsQuery } from "../../services/productData";
import SingleProductCard from "../../components/product/SingleProductCard";

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
      <Container maxWidth="lg" sx={{ marginY: 2 }}>
        <Typography
          gutterBottom
          align="center"
          variant="h4"
          color="special.third"
          component="div"
          sx={{
            fontWeight: "bold",
            marginY: 2,
            textTransform: "uppercase",
          }}
        >
          Product Lists
        </Typography>

        <Grid container spacing={3} columns={16}>
          {products &&
            products.map((product) => {
              return (
                <Grid size={{ xs: 16, sm: 8, md: 4 }} key={product.id}>
                  <SingleProductCard product={product} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ProductPage;
