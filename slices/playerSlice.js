import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player: null,
    opponent: null,
    playerColor: null,
    opponentColor: null,
  };
  
  export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
      setPlayer: (state, action) => {
        state.player = action.payload.name;
      },
      setOpponent: (state, action) => {
        state.opponent = action.payload.name;
      },
      setPlayerColor: (state, action) => {
        state.playerColor = action.payload.color;
      },
      setOpponentColor: (state, action) => {
        state.opponentColor = action.payload.color;
      },
      
    },
  });
  
  export const { setPlayer, setOpponent, setPlayerColor, setOpponentColor } = playerSlice.actions;
  
  // Selectors
  export const selectPlayer = (state) => state.player.player;
  export const selectOpponent = (state) => state.player.opponent;
  export const selectPlayerColor = (state) => state.player.playerColor;
  export const selectOpponentColor = (state) => state.player.opponentColor;
  
  export default playerSlice.reducer;