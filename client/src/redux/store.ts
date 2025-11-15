import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice"
import { authApi } from "./apis/auth.api";
import { userApi } from "./apis/user.api";
import { productApi } from "./apis/product.api";
import { contactApi } from "./apis/contact.api";
const reduxStore = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      productApi.middleware,
      contactApi.middleware,
    )
})
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
export default reduxStore