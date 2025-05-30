import React, { useEffect } from "react";
import {
  Button,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
// import { notes } from "../../../../data/db.json";
import { useGetData } from "../../hooks/useGetData";
import { DeleteOutlineRounded } from "@mui/icons-material";
import { useDeleteData } from "../../hooks/useDeleteData";

const NotePage = () => {
  const {
    data: notes,
    isLoading,
    isError,
  } = useGetData(`http://localhost:3001/notes`);

  const { destroyData, data: deleteData } = useDeleteData();

  const deleteNote = async (id) => {
    await destroyData(`http://localhost:3001/notes`, id);
  };
  console.log(deleteData);

  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          marginY: 2,
          padding: 2,
          bgcolor: "primary.light",
          borderRadius: 2,
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          justifyContent={"space-between"}
          paddingX={3}
        >
          <Typography
            color="secondary.dark"
            align="center"
            variant="h5"
            fontSize={"2rem"}
            fontWeight={600}
          >
            All Notes
          </Typography>
          <Typography color="secondary.dark" align="center" variant="h6">
            <Button
              href="/notes/create"
              variant="text"
              color="secondary"
              sx={{
                "&:hover": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
              size="large"
            >
              Create Note
            </Button>
          </Typography>
        </Stack>

        <Container
          maxWidth="lg"
          disableGutters
          sx={{
            // bgcolor: "primary.dark",
            padding: 2,
            marginTop: 2,
            borderRadius: 2,
          }}
        >
          {notes?.map((note) => {
            return (
              <Card
                key={note.id}
                sx={{
                  minWidth: 275,
                  boxShadow: 2,
                  "&:hover": { boxShadow: 10 },
                  marginY: 2,
                  bgcolor: "special.sec",
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" component={"p"} color="dark">
                      {note.title}
                    </Typography>
                    <IconButton onClick={() => deleteNote(note.id)}>
                      <DeleteOutlineRounded color="error" fontSize="medium" />
                    </IconButton>
                  </Stack>
                  <Typography
                    variant="subtitle1"
                    color="error"
                    sx={{ marginY: 1, textTransform: "capitalize" }}
                  >
                    {note.category}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component={"p"}
                    sx={{ marginY: 1 }}
                  >
                    {note.details}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default NotePage;
