import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';
import bookSlice from './books/booksSlice';

const rootReducer = { books: bookReducer, categories: categoriesReducer, slice: bookSlice };

const store = configureStore({ reducer: rootReducer });

export default store;
