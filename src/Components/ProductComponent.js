import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  //   const { title, price, image } = products;

  return (
    <div className="container">
      {products.map((product) => {
        const { id, title, price, image } = product;
        return (
          <Link to={`/product/${id}`}>
            <div className="card">
              <img src={image} alt="Avatar"></img>
              <div class="descriptionContainer">
                <h4 style={{ color: "black", textDecoration: "none" }}>
                  <b>{title}</b>
                </h4>
                <p>{`Price:  ${price} Tk`}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductComponent;
