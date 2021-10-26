import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player: null,
    opponent: null,
    playerColor: null,
    opponentColor: null,
    playerDisplayName: null,
    opponentDisplayName: null
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

      setPlayerDisplayName: (state, action) => {
        state.playerDisplayName = action.payload.displayName;
      },
      setOpponentDisplayName: (state, action) => {
        state.opponentDisplayName = action.payload.displayName;
      }
      
    },
  });
  
  export const { setPlayer, setOpponent, setPlayerColor, setOpponentColor, setPlayerDisplayName,  setOpponentDisplayName} = playerSlice.actions;
  
  // Selectors
  export const selectPlayer = (state) => state.player.player;
  export const selectOpponent = (state) => state.player.opponent;
  export const selectPlayerColor = (state) => state.player.playerColor;
  export const selectOpponentColor = (state) => state.player.opponentColor;

  export const selectOpponentDisplayName = (state) => state.player.opponentDisplayName;
  export const selectPlayerDisplayName = (state) => state.player.playerDisplayName;
  
  export default playerSlice.reducer;