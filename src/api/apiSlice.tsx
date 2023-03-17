import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Product } from "@interfaces/Products.interface";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecommerce-ts-products-bk-production.up.railway.app',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], undefined>({
      query: () => "/api/products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
