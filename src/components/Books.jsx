import React from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';

export default function Books() {
  return (
    <div>
      <Book title="Lord of the Rings" author="Tolkien" />
      <hr />
      <AddBookForm />
    </div>
  );
}
