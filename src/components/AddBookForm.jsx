/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';

const AddBookForm = (props) => {
  const { title, author } = props;
  const [newtitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);
  const dispatch = useDispatch();

  function validateNewbook() {
    if (!newtitle.trim() || !newAuthor.trim()) return;
    dispatch(addBook({ title: newtitle, author: newAuthor }));
    setNewTitle('');
    setNewAuthor('');
  }

  return (
    <div className="new-book-container">
      <h3>ADD NEW BOOK</h3>
      <form className="new-book-form">
        <input type="text" placeholder="Book title" onChange={(e) => setNewTitle(e.target.value)} value={newtitle} />
        <input type="text" placeholder="Book author" onChange={(e) => setNewAuthor(e.target.value)} value={newAuthor} />
        <button
          className="btn btn--form"
          type="button"
          onClick={() => validateNewbook()}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

AddBookForm.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

AddBookForm.defaultProps = {
  title: '',
  author: '',
};

export default AddBookForm;
