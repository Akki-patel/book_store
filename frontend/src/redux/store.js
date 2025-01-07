import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/Features/Cart/cartSlice"

export const store = configureStore({
  reducer: {
    cart:cartReducer
  },
})