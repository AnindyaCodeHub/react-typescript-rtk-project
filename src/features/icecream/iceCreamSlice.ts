import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { buyCake } from "../cake/cakeSlice";

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState, //This is a ES6 shorthand syntax for initialState: initialState, as here key and value are same.
  reducers: {
    buyIceCream: (state) => {
      state.numOfIceCreams--;
    },
    restockIceCream: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //Use Case: This extra reducer fulfill the below use case => "If a cake is ordered then the customer will get a icrecream free
  //with it."
  //The below way of writing the extreReducers has been depricated.
  //   extraReducers: {
  //     ["cake/buyCake"]: (state) => {
  //       state.numOfIceCreams--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(buyCake, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer; //Default export of reducer

export const { buyIceCream, restockIceCream } = iceCreamSlice.actions; //Named export of actions
