import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  // const products = useSelector((state) => state);
  // console.log(products)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  //  console.log("products",products)

  return (
    <div className="ui grid conatainer">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
