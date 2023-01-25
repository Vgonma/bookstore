/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  'bookstore/books/GET_BOOKS',
  async () => (
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G7owSUVKQ99Rn2lm2aXE/books').then((res) => res.json())
  ),
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    books: [],
    loading: false,
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default dataSlice.reducer;
