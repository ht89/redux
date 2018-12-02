import { ActionReducerMap } from '@ngrx/store';
import {
  FETCHING_PRODUCTS_SUCCESSFULLY,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY
} from './product.constants';
import { Product } from './product.model';

export interface ProductState {
  loading: boolean;
  list: Array<Product>;
  error: string;
}

const initialState: ProductState = {
  loading: false,
  list: [{ name: 'init' }],
  error: void 0
};

export interface FeatureProducts {
  products: ProductState;
}

const addProduct = (list, product) => {
  return [...list, product];
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS_SUCCESSFULLY:
      return { ...state, list: action.payload, loading: false };
    case FETCHING_PRODUCTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ADD_PRODUCT_ERROR:
      return { ...state, error: action.payload, loading: false };
    case FETCHING_PRODUCTS:
      return { ...state, loading: true };
    case ADD_PRODUCT:
      return { ...state, loading: true };
    case ADD_PRODUCT_SUCCESSFULLY:
      return { ...state, list: addProduct(state.list, action.payload) };
    default:
      return state;
  }
};

export const ProductReducers: ActionReducerMap<FeatureProducts> = {
  products: productReducer
};



