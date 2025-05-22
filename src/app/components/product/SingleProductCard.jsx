import React from "react";
import { Card, CardActions, CardContent, Button } from "@mui/material";

const SingleProductCard = ({ product }) => {
  return (
    <React.Fragment>
      <Card sx={{ minWidth: 275, boxShadow: 2, "&:hover": { boxShadow: 6 } }}>
        <CardContent>
          <div style={{ minHeight: "340px" }}>
            <h3>
              {product.title.length > 30
                ? product.title.substring(0, 30) + "..."
                : product.title}
            </h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{product.description && product.description.substring(0, 80)}</p>
            <p>Price: ${product.price}</p>
          </div>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            sx={{ marginY: 1 }}
            color="secondary"
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default SingleProductCard;
