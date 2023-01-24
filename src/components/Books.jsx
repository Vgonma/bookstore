import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// Component imports
import Book from './Book';
import AddBookForm from './AddBookForm';

export default function Books() {
  const booksList = useSelector((state) => state.books);
  return (
    <div>
      {booksList.map((book) => (
        <Book key={uuidv4()} title={book.title} author={book.author} />
      ))}
      <hr />
      <AddBookForm />
    </div>
  );
}
