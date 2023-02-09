import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  whishlistProduct: [],
};
const whishLIstSlice = createSlice({
  name: "Whishlist",
  initialState,
  reducers: {
    addInWhishlist: (state, action) => {
      state.whishlistProduct = [
        ...state.whishlistProduct,
        {
          id: action.payload.id,
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
        },
      ];
    },
    deleteSelectedproduct: (state, action) => {
      const index = state.whishlistProduct.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.whishlistProduct.splice(index, 1);
    },
  },
});
export const { addInWhishlist, deleteSelectedproduct, increment } =
  whishLIstSlice.actions;
export default whishLIstSlice.reducer;
