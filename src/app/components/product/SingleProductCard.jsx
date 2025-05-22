import React from "react";
import { Card, CardActions, CardContent, Button, Rating } from "@mui/material";
import { Link } from "react-router";

const SingleProductCard = ({ product }) => {
  return (
    <React.Fragment>
      <Card sx={{ minWidth: 275, boxShadow: 2, "&:hover": { boxShadow: 6 } }}>
        <CardContent>
          <Link
            to={`/products/${product.id}`}
            style={{
              minHeight: "330px",
              display: "block",
            }}
          >
            <h3>
              {product.title.length > 30
                ? product.title.substring(0, 30) + "..."
                : product.title}
            </h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", marginTop: "10px" }}
            />
            <p className="text-gray-500 text-sm p-2">
              {product.description && product.description.substring(0, 200)}
            </p>
          </Link>
          <Rating
            value={product.rating.rate}
            readOnly
            size="medium"
            sx={{ marginY: 1 }}
          />
          <p>Price: ${product.price}</p>
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
