import { createSlice } from '@reduxjs/toolkit';
import { allCarsThunk, firstPageCatalogThunk } from './CatalogThunk';

const initialState = {
  carsToDisplay: [],
  allCars: null,
  filter: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,

  reducers: {
    //     setFilter(state, action) {
    //       state.filter = action.payload;
    //     },
  },

  extraReducers: builder => {
    builder
      .addCase(firstPageCatalogThunk.fulfilled, (state, { payload }) => {
        state.carsToDisplay = [...state.carsToDisplay, ...payload];
      })
      .addCase(allCarsThunk.fulfilled, (state, { payload }) => {
        state.allCars = payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
