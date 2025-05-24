import React, { useEffect, useState } from "react";
import { usePostData } from "../../hooks/usePostData";
import { useGetData } from "../../hooks/useGetData";
import {
  Container,
  Box,
  TextField,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

const CreateNotePage = () => {
  const navigate = useNavigate();
  const { createData, data, isError, isLoading, isSuccess } = usePostData();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    const newNoteData = {
      title,
      detail,
      category,
      id: Math.random().toString(),
    };
    await createData(`http://localhost:3001/notes`, newNoteData);
    navigate(`/notes`);
  };

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
          Create Notes
        </Typography>
        <form onSubmit={formSubmit}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="title"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={{ backgroundColor: "special.sec" }}
          />
          <TextField
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            label="detail"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={{ backgroundColor: "special.sec" }}
          />
          <TextField
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="category"
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

export default CreateNotePage;
