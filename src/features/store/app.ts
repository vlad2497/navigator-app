import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isAuth: boolean;
}

const initialState: CounterState = {
  isAuth: true,
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = counterSlice.actions;

export default counterSlice.reducer;
