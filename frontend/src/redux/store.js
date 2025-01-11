import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/Features/Cart/cartSlice"
import bookApi from './Features/books/booksApi'
import ordersApi from './Features/orders/ordersApi'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [bookApi.reducerPath]:bookApi.reducer,
    [ordersApi.reducerPath]:ordersApi.reducer,
  },
  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(bookApi.middleware,ordersApi.middleware),
})