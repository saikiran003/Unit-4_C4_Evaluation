// use axios for api call
// import axios from "axios";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  SORT_PRODUCT_ASC,
  SORT_PRODUCT_DESC,
} from "./actionTypes";

const getDataRequest = () => {
  return { type: GET_DATA_REQUEST };
};
const getProductsData = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};
const getDataFailure = () => {
  return {
    type: GET_DATA_FAILURE,
  };
};

const sortProducts = (payload) => {
  return { type: SORT_PRODUCT_ASC, payload };
};
const sortProductsDes = (payload)=>{
    return {
        type:SORT_PRODUCT_DESC,payload
    }
}

const filterProducts = () => {};

export {
  getProductsData,
  sortProducts,
  filterProducts,
  getDataRequest,
  getDataFailure,
  sortProductsDes
};
