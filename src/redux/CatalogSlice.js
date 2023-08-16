import { createSlice } from '@reduxjs/toolkit';
import { allCarsThunk } from './allCarsThunk';

const initialState = {
  cars: null,
  filter: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,

  //   reducers: {
  //     setFilter(state, action) {
  //       state.filter = action.payload;
  //     },
  //   },

  extraReducers: builder => {
    builder.addCase(allCarsThunk.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const catalogReducer = catalogSlice.reducer;
