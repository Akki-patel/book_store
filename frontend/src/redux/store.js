import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/Features/Cart/cartSlice"
import bookApi from './Features/books/booksApi'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [bookApi.reducerPath]:bookApi.reducer,
  },
  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(bookApi.middleware),
})