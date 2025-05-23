import React from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  CardContent,
  Box,
  Rating,
  Stack,
} from "@mui/material";
import { useGetRecipesQuery } from "../../services/recipeData";

const RecipePage = () => {
  const { data, error, isLoading } = useGetRecipesQuery();
  console.log(data);

  return (
    <React.Fragment>
      <Container maxWidth="lg" disableGutters sx={{ padding: 2 }}>
        <Typography
          variant="h4"
          component={"h4"}
          align="center"
          color="primary"
        >
          All Recipe
        </Typography>
        {isLoading && <Typography>Loading...</Typography>}
        {error && <Typography>Error: {error.message}</Typography>}
        {data && data?.recipes && data?.recipes.length > 0 ? (
          <Grid container spacing={2} columns={12}>
            {data?.recipes.map((recipe) => (
              <Grid size={{ sm: 12, md: 6, lg: 4 }} key={recipe.id}>
                <Card
                  sx={{
                    margin: 2,
                    padding: 2,
                    backgroundColor: "#f5f5f5",
                    boxShadow: 1,
                    "&:hover": {
                      boxShadow: 3,
                      transform: "scale(1.02)",
                      transition: "0.3s",
                    },
                    minHeight: "400px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" color="primary.dark">
                      {recipe.name}
                    </Typography>
                    <Typography
                      variant="overline"
                      fontSize={14}
                      color="secondary.light"
                    >
                      {recipe.cuisine}
                    </Typography>
                    <Box
                      component="img"
                      src={recipe.image}
                      alt={recipe.name}
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 1,
                        marginTop: 2,
                      }}
                    />
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Rating
                        value={recipe?.rating}
                        readOnly
                        precision={0.5}
                        size="medium"
                        sx={{ marginY: 2 }}
                      />
                      <Typography
                        variant="span"
                        fontSize={20}
                        color="special.third"
                        sx={{ marginY: 1 }}
                      >
                        {recipe.rating}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>No recipes found.</Typography>
        )}
      </Container>
    </React.Fragment>
  );
};

export default RecipePage;
