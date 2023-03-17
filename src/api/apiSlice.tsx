import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Product } from "@interfaces/Products.interface";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], undefined>({
      query: () => "/api/products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
