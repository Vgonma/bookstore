import React from 'react';
import { useSelector } from 'react-redux';
// Component imports
import Book from './Book';
import AddBookForm from './AddBookForm';

export default function Books() {
  const booksList = useSelector((state) => state.books);
  return (
    <div>
      {booksList.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <hr />
      <AddBookForm />
    </div>
  );
}
