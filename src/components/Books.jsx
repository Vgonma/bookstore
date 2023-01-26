import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Component imports
import Book from './Book';
import AddBookForm from './AddBookForm';
import { getData } from '../redux/books/booksSlice';

export default function Books() {
  const booksList = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="booklist-container">
      {booksList.map((book) => (
        <Book
          key={book.item_id}
          itemId={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <hr />
      <AddBookForm />
    </div>
  );
}
