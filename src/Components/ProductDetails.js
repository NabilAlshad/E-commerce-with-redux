import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedProducts } from "../Redux/Actions/Actions";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [isloading, setloading] = useState(true);
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);
  console.log(product);
  const fetchSingleProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err.message);
      });
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    fetchSingleProduct();
    setloading(false);
  }, [id]);

  const { image, title, description, price } = product;
  return (
    <div>
      {isloading ? (
        <p>...loading</p>
      ) : (
        <div className="productContainer">
          <div className="Thumbnail">
            <img src={image} alt="" />
          </div>
          <div className="productDescription">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h6>Price:{price}</h6>
            <button>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
