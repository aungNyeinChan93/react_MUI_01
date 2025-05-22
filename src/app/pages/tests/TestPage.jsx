import React from "react";
import { Container } from "@mui/material";

const TestPage = () => {
  return (
    <React.Fragment>
      {/*  */}
      <Container
        maxWidth="md"
        disableGutters
        component={"div"}
        sx={{ bgcolor: "gray", padding: "10px", borderRadius: "6px" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusamus
          temporibus expedita quos culpa nobis ab eos eius, quia, molestias
          voluptatibus, optio architecto suscipit labore sapiente adipisci
          blanditiis? Quam, aperiam.
        </p>
      </Container>
    </React.Fragment>
  );
};

export default TestPage;
