import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://violently-internal-filly.ngrok-free.app/',
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("ngrok-skip-browser-warning", "69420");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getShops: builder.query({
      query: () => 'shops/',
    }),
    addShop: builder.mutation({
      query: (shopData) => ({
        url: 'shops/',
        method: 'POST',
        body: shopData,
      }),
    }),
  }),
});

export const { useGetShopsQuery, useAddShopMutation } = shopApi;
