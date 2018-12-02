import {
  FETCHING_PRODUCTS_SUCCESSFULLY,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR
} from './product.constants';


export const fetchSuccessfully = products => ({
  type: FETCHING_PRODUCTS_SUCCESSFULLY,
  payload: products
});

export const fetchError = error => ({
  type: FETCHING_PRODUCTS_ERROR,
  payload: error
});

export const fetchProducts = () => ({
  type: FETCHING_PRODUCTS
});

export const addProductsSuccessfully = product => ({
  type: ADD_PRODUCT_SUCCESSFULLY,
  payload: product
});

// the product parameter will be used by the side effect as the body data for the HTTP POST
export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const addProductError = error => ({
  type: ADD_PRODUCT_ERROR,
  payload: error
});




