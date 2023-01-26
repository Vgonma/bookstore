// App id: G7owSUVKQ99Rn2lm2aXE
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const defaultState = [{
  books: [],
  loading: false,
}];

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.book];
    }

    case REMOVE_BOOK: {
      return state.filter((item) => item.id !== action.id);
    }

    case `${GET_BOOKS}/pending`: {
      return [...state, action.payload];
    }

    case `${GET_BOOKS}/fulfilled`: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}

export const getData = createAsyncThunk(
  'bookstore/books/GET_BOOKS',
  async () => (
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G7owSUVKQ99Rn2lm2aXE/books').then((res) => res.json())
  ),
);

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G7owSUVKQ99Rn2lm2aXE/books',
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${book.id}`,
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
  }).then((res) => {
  res.json();
  return book;
}));

export function removeBook(bookId) {
  return {
    type: REMOVE_BOOK,
    id: bookId,
  };
}
