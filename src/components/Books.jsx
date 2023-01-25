import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Component imports
import Book from './Book';
import AddBookForm from './AddBookForm';
import { getData } from '../redux/books/books';

export default function Books() {
  const booksList = useSelector((state) => Object.entries(state.slice.books));
  const dispatch = useDispatch();

  booksList.forEach((book) => console.log(book));
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      {booksList.map((book) => (
        <Book key={book[0]} id={book[0]} title={book[1][0].title} author={book[1][0].author} />
      ))}
      <hr />
      <AddBookForm />
    </div>
  );
}
