import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketItems: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      let isInArray = false;
      let quantity = 1;
      let productID = `product${payload.id}`;

      // if product already exists in array
      state.basketItems?.forEach((el) => {
        if (el.id === payload.id) {
          isInArray = true;
          el.quantity++
        //   localStorage.setItem(
        //     productID,
        //     +localStorage.getItem(productID) + +quantity
        //   );
            
        }
      });

      if (!isInArray) {
        state.basketItems.push({ ...payload, quantity: 1 });
        // localStorage.setItem(
        //   productID,
        //   +localStorage.getItem(productID) + +quantity
        // );
      }
    },
  },
});

export const { addToCart } = basketSlice.actions;
export default basketSlice.reducer;
