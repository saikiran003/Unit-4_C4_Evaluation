import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataFailure,
  getDataRequest,
  getProductsData,
  sortProducts,
  sortProductsDes
} from "../Redux/actions";
import { Select, Grid } from "./Styled";

export const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    const getData = async () => {
      try {
        dispatch(getDataRequest());
        const res = await fetch(
          "https://movie-fake-server.herokuapp.com/products"
        );
        const data = await res.json();
        console.log(data);
        dispatch(getProductsData(data));
      } catch (err) {
        console.log(err);
        dispatch(getDataFailure());
      }
    };

    getData();
  }, [dispatch]);

  const handleSort = async (e) => {
    // dispatch sort products on change
    console.log(e.target.value);
    try {
      const res = await fetch(
        "https://movie-fake-server.herokuapp.com/products"
      );
      const data = await res.json();
      if ((e.target.value = "asc")) {
        dispatch(sortProducts(data));
      }
      if((e.target.value="desc")){
        dispatch(sortProductsDes(data))
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container" key={products.id}>
        {/* iterate data and show each POroduct card */}
        {products.map((products) => {
          return (
            <div>
              <h6>{products.title}</h6>
              <img src={products.image} alt={products.title} />
              <h5>{products.brand}</h5>
              <h4>Price:{products.price}</h4>
            </div>
          );
        })}
      </Grid>
    </>
  );
};
