import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteCarsId: [],
};

const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState,

  reducers: {
    addToFavorite(state, { payload }) {
      state.favoriteCarsId = payload;
    },
  },
});

export const favoriteReducer = FavoriteSlice.reducer;
export const { addToFavorite } = FavoriteSlice.actions;
