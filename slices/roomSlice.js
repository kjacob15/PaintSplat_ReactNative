import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room: null,
  };
  
  export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
      setRoom: (state, action) => {
        state.room = action.payload.roomId;
      },
    },
  });
  
  export const { setRoom } = roomSlice.actions;
  
  // Selectors
  export const selectRoom = (state) => state.room.room;
  
  export default roomSlice.reducer;