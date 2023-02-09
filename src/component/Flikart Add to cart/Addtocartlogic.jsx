import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  addProductsInCart: [],
  totalAmount: 0,

  // myMsg: "",
};

const counterSlice = createSlice({
  name: "flipkart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const existingProductIndex = state.addProductsInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex === -1) {
        state.counter += 1;
        state.totalAmount += action.payload.price;
        state.addProductsInCart = [
          ...state.addProductsInCart,
          {
            id: action.payload.id,
            quantity: 1,
            myMsg: "",
            image: action.payload.image,
            title: action.payload.title,
            price: action.payload.price,
          },
        ];
        // state.myMsg = "";
      } else if (existingProductIndex !== -1) {
        state.addProductsInCart.map((item) => {
          if (item.id === action.payload.id) {
            item.myMsg = "This product is already added in the cart.";
          }
        });
      }
    },

    clearCart: (state) => {
      state.addProductsInCart = [];
      state.totalAmount = 0;
      state.counter = 0;
    },
    increaseQuantity: (state, action) => {
      {
        state.addProductsInCart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
          }
        });
      }
      state.totalAmount += action.payload.price;
    },

    decreaseQuantity: (state, action) => {
      state.addProductsInCart.map((item) => {
        if (item.id === action.payload.id && item.quantity > 1) {
          item.quantity -= 1;
          state.totalAmount -= action.payload.price;
        }
      });
    },
    deleteSelectedCart: (state, action) => {
      const index = state.addProductsInCart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.addProductsInCart.splice(index, 1);
      state.totalAmount =
        state.totalAmount - action.payload.quantity * action.payload.price;
      state.counter -= 1;
    },
  },
});

export const {
  increment,
  showImage,
  incrementByAmount,
  clearCart,

  increaseQuantity,
  decreaseQuantity,
  deleteSelectedCart,
} = counterSlice.actions;
export default counterSlice.reducer;
