import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookSlice from './books/booksSlice';

const rootReducer = { categories: categoriesReducer, books: bookSlice };

const store = configureStore({ reducer: rootReducer });

export default store;
