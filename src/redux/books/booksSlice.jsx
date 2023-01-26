/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const getData = createAsyncThunk('bookstore/books/GET_BOOKS', async () => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G7owSUVKQ99Rn2lm2aXE/books',
).then((res) => res.json()));

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G7owSUVKQ99Rn2lm2aXE/books',
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${book.item_id}`,
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
  },
).then((res) => {
  const newbook = {
    ...book, key: book.id,
  };
  return newbook;
}));

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => fetch(
  `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G7owSUVKQ99Rn2lm2aXE/books/${id}`,
  {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
    }),
  },
).then((res) => id));

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
      const data = action.payload;
      const books = Object.keys(data).map((key) => ({
        item_id: key,
        ...data[key][0],
      }));
      state.books = books;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
    [addBook.fulfilled]: (state, action) => {
      const newBook = {
        ...action.payload,
        category: 'Fiction',
      };
      state.books = [...state.books, newBook];
    },
    [removeBook.fulfilled]: (state, { payload }) => {
      const arr = state.books.filter((item) => item.item_id !== payload);
      state.books = arr;
    },
  },
});

export default dataSlice.reducer;
