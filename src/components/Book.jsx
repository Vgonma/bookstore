import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// Component imports
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { title, author, id } = props;
  const [bookTitle] = useState(title);
  const [bookAuthor] = useState(author);
  const [bookId] = useState(id);
  const dispatch = useDispatch();

  function removeHandler(bookId) {
    dispatch(removeBook(bookId));
  }

  return (
    <div className="book-container">
      <div className="book-info">
        <p className="book-genre">Fantasy</p>
        <h2 className="book-title">{bookTitle}</h2>
        <p className="book-author">{bookAuthor}</p>
        <ul>
          <button type="button">Comments</button>
          <button type="button" onClick={() => removeHandler(bookId)}>Remove</button>
          <button type="button">Edit</button>
        </ul>
      </div>
      <div className="reading-progress">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <p>64%</p>
        <p>Completed</p>
        <div className="current-progress-container">
          <p className="current-chapter">Current Chapter</p>
          <p className="current-chapter-number">Chapter 17</p>
          <button type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
