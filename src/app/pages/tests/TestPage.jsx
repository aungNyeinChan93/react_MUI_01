import React from "react";
import { Container, Button, makeStyles } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../features/counter/CounterSlice";
import { AbcRounded } from "@mui/icons-material";
import { useGetData } from "../../hooks/useGetData";

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
        maxWidth="xs"
        disableGutters
        component={"div"}
        sx={{
          // bgcolor: "primary.dark",
          bgcolor: "special.main",
          "&:hover": { bgcolor: "special.third" },
          padding: "10px",
          borderRadius: "6px",
          textAlign: "center",
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
        repudiandae, quis reiciendis, eos quibusdam mollitia sit vel cum
        doloremque harum soluta perferendis accusantium consequuntur asperiores
        enim a necessitatibus vero nobis.
      </p>
    </React.Fragment>
  );
};

export default TestPage;
