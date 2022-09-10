import React from "react";
import products from "../data";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

const Product = () => {
  return (<div style={{ display: "flex", flexWrap: "wrap",gap : "10px" }}>
    {products.map((prod) => {
    return (<div style={{margin: "auto",
        background: "gold",
         width:"40%"}} key={prod.key}>
      <Card style={{ width: "100%", height: "fit-content" }}>
        <CardBody style={{ display: "flex", flexDirection: "column" }}>
          <CardImg
            variant="top"
            src={prod.posterURL}
            alt={prod.title}
            style={{ height: "18rem" }}
          />

          <h1>
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
              {prod.title}{" "}
            </CardTitle>
          </h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ReactStars
              count={5}
              value={prod.rating}
              size={24}
              color2={"#ffd700"}
            />

            <Link to={`/product/${prod.id}`} className="btn btn-primary">
              More Info
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>);
  })
}
      </div>);
};
export default Product;


