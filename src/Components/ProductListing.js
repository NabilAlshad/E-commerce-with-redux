import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Actions/Actions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const allProducts = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(allProducts);
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((error) => {
        console.log(error.message);
      });
    console.log(response);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
