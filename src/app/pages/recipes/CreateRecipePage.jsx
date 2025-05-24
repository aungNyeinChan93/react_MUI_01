import React, { useState } from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useCreateRecipeMutation } from "../../services/recipeData";
import { useNavigate } from "react-router";

const CreateRecipePage = () => {
  const navigate = useNavigate();
  const [createRecipe, { data, isLoading, error }] = useCreateRecipeMutation();
  const [recipeName, setRecipeName] = useState();
  const [cuisine, setCuisine] = useState();

  const submitForm = async (e) => {
    e.preventDefault();

    const newRecipe = {
      name: recipeName,
      cuisine: cuisine,
    };
    await createRecipe(newRecipe);

    if (data && Object.keys(data).length > 1) {
      e.target.reset();
      setTimeout(() => {
        navigate("/recipes");
      }, 3000);
    }
  };
  return (
    <React.Fragment>
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          padding: 2,
          bgcolor: "primary.light",
          borderRadius: 2,
          marginTop: 4,
        }}
      >
        <Typography
          variant="h4"
          component={"h4"}
          align="center"
          color="primary"
        >
          Create Recipe
        </Typography>
        <Typography
          variant="h6"
          component={"h6"}
          align="center"
          color="text.secondary"
        >
          Create a new recipe by filling out the form below.
        </Typography>
        <form onSubmit={submitForm}>
          <TextField
            value={recipeName}
            label="recipe name"
            variant="outlined"
            fullWidth
            sx={{ marginY: 2 }}
            // required
            onChange={(e) => setRecipeName(e.target.value)}
          />
          <TextField
            value={cuisine}
            label="cuisine"
            variant="outlined"
            fullWidth
            sx={{ marginY: 2 }}
            // required
            onChange={(e) => setCuisine(e.target.value)}
          />
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginY: 2 }}
              type="submit"
            >
              Create Recipe
            </Button>
            <Button
              href="/recipes"
              variant="outlined"
              color="primary"
              sx={{ marginY: 2 }}
              type="submit"
            >
              Back
            </Button>
          </Stack>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default CreateRecipePage;
