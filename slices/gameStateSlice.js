import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameboard: null,
};

export const gameBoardSlice = createSlice({
  name: "gameboard",
  initialState,
  reducers: {
    updateGameboard: (state, action) => {
      state.gameboard = action.payload.gameboard;
    },
  },
});

export const { updateGameboard } = gameBoardSlice.actions;

export const selectGameboard = (state) => state.gameboard.gameboard;

export default gameBoardSlice.reducer;
