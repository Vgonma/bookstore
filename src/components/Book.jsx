import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// Component imports
import { removeBook } from '../redux/books/booksSlice';

function Book(props) {
  const { title, author, itemId } = props;
  const [bookTitle] = useState(title);
  const [bookAuthor] = useState(author);
  const [bookId] = useState(itemId);
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
        <div className="cirlce-text-container">
          <p className="circle-percentage">64%</p>
          <p className="circle-completed">Completed</p>
        </div>
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
  itemId: PropTypes.string.isRequired,
};

export default Book;
