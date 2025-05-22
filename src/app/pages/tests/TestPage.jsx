import React from "react";
import { Container, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../features/counter/CounterSlice";
import { AbcRounded } from "@mui/icons-material";
const TestPage = () => {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      {/*  */}
      <Container
        maxWidth="md"
        disableGutters
        component={"div"}
        sx={{
          bgcolor: "pink",
          padding: "10px",
          borderRadius: "6px",
          textAlign: "center",
        }}
      >
        <p>{count}</p>
        <Button
          disabled={count === 50}
          sx={{ margin: "10px" }}
          startIcon={<AbcRounded fontSize="large" color="error" />}
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => dispatch(increase())}
        >
          +
        </Button>
        <Button
          sx={{ margin: "10px" }}
          startIcon={<AbcRounded fontSize="large" color="error" />}
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => dispatch(decrease())}
        >
          -
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default TestPage;
