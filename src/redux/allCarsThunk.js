import { createAsyncThunk } from '@reduxjs/toolkit';
import { catalogRequest } from 'api/api';

export const allCarsThunk = createAsyncThunk('catalog/allCarsThunk', async () =>
  catalogRequest()
);
