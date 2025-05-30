import React from "react";
import {
  Container,
  Button,
  makeStyles,
  Grid,
  Paper,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../features/counter/CounterSlice";
import { AbcRounded, DeleteOutline } from "@mui/icons-material";
import { useGetData } from "../../hooks/useGetData";
import TestCard from "../../components/tests/TestCard";
import TestDrawer from "../../components/tests/TestDrawer";
import SideMenuBar from "../../components/base/SideMenuBar";
import { styled } from "@mui/material/styles";

const TestStyleComponent = styled("h1")(({ theme }) => ({
  background: theme.palette.special.main,
  color: theme.palette.secondary.main,
  fontSize: "2rem",
  textAlign: "center",
  padding: "20px",
  margin: "20px auto",
  borderRadius: "10px",
}));

const TestPage = () => {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const {
    data: { todos },
    isLoading,
    isError,
  } = useGetData(`https://dummyjson.com/todos`);
  console.log(todos);

  return (
    <React.Fragment>
      {/*  */}
      <Container
        maxWidth="lg"
        disableGutters
        component={"div"}
        sx={{
          // bgcolor: "primary.dark",
          bgcolor: "special.main",
          "&:hover": { bgcolor: "special.third" },
          padding: "10px",
          borderRadius: "6px",
          textAlign: "center",
          margin: { xs: "20px auto", sm: "20px 0" },
        }}
      >
        <p>{count}</p>

        <Button
          disabled={count === 50}
          startIcon={<AbcRounded fontSize="large" color="error" />}
          variant="outlined"
          color="special"
          size="large"
          sx={{ margin: "10px" }}
          onClick={() => dispatch(increase())}
        >
          +
        </Button>
        <Button
          startIcon={<AbcRounded fontSize="large" color="error" />}
          variant="outlined"
          color="special"
          size="large"
          sx={{ margin: "10px" }}
          onClick={() => dispatch(decrease())}
        >
          -
        </Button>
      </Container>
      <Container maxWidth="lg" disableGutters className="cardWithGrid">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          repudiandae, quis reiciendis, eos quibusdam mollitia sit vel cum
          doloremque harum soluta perferendis accusantium consequuntur
          asperiores enim a necessitatibus vero nobis.
        </p>

        <section className="grid ">
          <Grid
            direction="row"
            container
            spacing={2}
            columns={12}
            sx={{ paddingX: 4, marginTop: 2 }}
          >
            <Grid item size={{ xs: 12, sm: 8, md: 4, lg: 3 }}>
              <Paper
                elevation={6}
                variant="elevation"
                square
                sx={{ padding: 2, bgcolor: "special.third" }}
              >
                <Typography variant="h6" color="error" align="center">
                  Box One
                </Typography>
              </Paper>
            </Grid>
            <Grid item size={{ xs: 12, sm: 8, md: 4, lg: 3 }}>
              <Paper
                elevation={1}
                variant="outlined"
                sx={{
                  padding: 2,
                  bgcolor: "special.third",
                  "&:hover": { boxShadow: 10 },
                }}
              >
                <Typography variant="h6" color="error" align="center">
                  Box One
                </Typography>
              </Paper>
            </Grid>
            <Grid item size={{ xs: 12, sm: 8, md: 4, lg: 3 }}>
              <Paper
                elevation={3}
                variant="outlined"
                sx={{ padding: 2, bgcolor: "special.third" }}
              >
                <Typography variant="h6" color="error" align="center">
                  Box One
                </Typography>
              </Paper>
            </Grid>
            <Grid item size={{ xs: 12, sm: 8, md: 4, lg: 3 }}>
              <Paper
                elevation={3}
                variant="outlined"
                sx={{ padding: 2, bgcolor: "special.third" }}
              >
                <Typography variant="h6" color="error" align="center">
                  Box One
                </Typography>
              </Paper>
            </Grid>
            <Grid item size={{ xs: 12, sm: 8, md: 4, lg: 3 }}>
              <Paper
                elevation={3}
                variant="elevation"
                sx={{ padding: 2, bgcolor: "special.sec" }}
              >
                <TestCard />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ padding: 2 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
              return (
                <Grid key={index} item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <Card
                    sx={{
                      maxWidth: "auto",
                      height: "100%",
                      boxShadow: 3,
                      "&:hover": {
                        boxShadow: 10,
                        scale: "1.05",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <CardHeader
                      title={
                        <Typography variant="h6" color="info">
                          This is Header Title
                        </Typography>
                      }
                      action={
                        <IconButton>
                          <DeleteOutline color="error" />
                        </IconButton>
                      }
                      subheader={"this is subHeader !!!"}
                    />
                    <CardMedia
                      component={"img"}
                      image="/images/placeholder.png"
                      // src="/images/placeholder.png"
                      height={140}
                      alt="test"
                    />
                    <CardContent>
                      <Typography variant="h6" align="center" color="error">
                        Card {item}
                      </Typography>
                      <Typography variant="subtitle1" color="secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit nesciunt vel culpa distinctio consequatur suscipit
                        deleniti sed aliquam aut saepe?
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" color="warning" fullWidth>
                        Send
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </section>
        <TestDrawer />
        <SideMenuBar />

        <TestStyleComponent>
          This is styled Component!
          <TestStyleComponent sx={{ color: "red", fontSize: "1.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus
            eum natus cupiditate recusandae quam necessitatibus eius dolorum
            architecto quasi?
          </TestStyleComponent>
        </TestStyleComponent>
      </Container>
    </React.Fragment>
  );
};

export default TestPage;
