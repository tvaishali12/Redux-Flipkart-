import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Addtocartlogic";
import whishLIstSlice from "./Whishlistlogic";

export const Store = configureStore({
  reducer: {
    count: counterSlice,
    whishlist: whishLIstSlice,
  },
});
