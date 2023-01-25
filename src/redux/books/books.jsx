import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const appid = 'G7owSUVKQ99Rn2lm2aXE';
const defaultState = [
  {
    item1: [
      {
        title: "The Handmaid's Tale",
        category: 'Fiction',
      },
    ],
    item2: [
      {
        title: 'Great Expectations',
        category: 'Classics',
      },
    ],
  },
];

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
      return ['loading'];
    }

    case `${GET_BOOKS}/fulfilled`: {
      return action.payload;
    }

    default:
      return state;
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(bookId) {
  return {
    type: REMOVE_BOOK,
    id: bookId,
  };
}

export const getData = createAsyncThunk(GET_BOOKS, async () => {
  const prom = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G7owSUVKQ99Rn2lm2aXE/books',
  );
  const data = await prom.json();
  return data;
});
