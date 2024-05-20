import { createSlice } from "@reduxjs/toolkit";

const gamesSilce = createSlice({
  name: "games",
  initialState: {
    currentGame: null,
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSilce.actions;
export default gamesSilce.reducer;
