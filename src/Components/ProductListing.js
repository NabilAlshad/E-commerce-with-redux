import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { selectedProducts, setProducts } from "../Redux/Actions/Actions";
import ProductComponent from "./ProductComponent";

const ProductListing = ({ selectedProducts, setProducts, products }) => {
  console.log(products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => {
        console.log(err.message);
      });
    dispatch(setProducts(response.data));
    // console.log(response.data);
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

const mapStateToProps = (state) => ({
  products: state.allProducts.products,
});
export default connect(mapStateToProps, { setProducts, selectedProducts })(
  ProductListing
);
