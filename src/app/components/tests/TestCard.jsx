import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TestCard = () => {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 300, margin: "auto" }}>
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/300x140"
          alt="Placeholder"
        />
        <CardContent>
          <Typography variant="h6">Card with Image</Typography>
          <Typography variant="body2" color="text.secondary">
            This is a media card with a picture, text, and buttons.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default TestCard;
