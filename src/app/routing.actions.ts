import { PRODUCTS, TODOS } from './routing.constants';

export const gotoProducts = pageNo => ({
  type: PRODUCTS,
  payload: {
    url: '/products',
    query: {
      page: pageNo
    }
  }
});

export const gotoTodo = pageNo => ({
  type: TODOS,
  payload: {
    url: '/todos',
    query: {
      page: pageNo
    }
  }
});
