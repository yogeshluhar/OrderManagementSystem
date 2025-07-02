import { configureStore } from '@reduxjs/toolkit';
import { shopApi } from './ShopsAPI/shopAPI';
import { productApi } from './ShopsAPI/ProductAPI';


const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, productApi.middleware),
});

export default store;