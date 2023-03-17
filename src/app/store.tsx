import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "@api/apiSlice";
import cardReducer from '@features/cardSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    card: cardReducer
  },
  middleware: (getDefaultSettings) =>
    getDefaultSettings().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
