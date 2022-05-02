import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, SORT_PRODUCT_ASC, SORT_PRODUCT_DESC } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case GET_DATA_REQUEST:{
      return {
        ...state,
        isLoading:true,
        isError:false,
        products:[]
      }
    }
    case GET_DATA_FAILURE:{
      return {
        ...state,
        isLoading:false,
        isError:true,
        products:[]
      }
    }
    case GET_DATA_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        isError:false,
        products:payload
      }
    }
    case SORT_PRODUCT_ASC:{
      return {
        ...state,
        products: payload.sort((a,b)=>a.price-b.price)
      }
    }
    case SORT_PRODUCT_DESC:{
      return {
        ...state,
        products:payload.sort((a,b)=>b.price-a.price)
      }
    }
    default:return state
  }
};
export { reducer };
