import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slices/roomSlice";
import playerReducer from "./slices/playerSlice";
import gameboardReducer from "./slices/gameStateSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    player: playerReducer,
    gameboard: gameboardReducer,
  },
});
