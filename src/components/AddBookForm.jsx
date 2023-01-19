/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBookForm = (props) => {
  const { title, author } = props;
  const [newtitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);

  return (
    <div className="new-book-container">
      <h3>ADD NEW BOOK</h3>
      <form className="new-book-form">
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Book author" />
        <button className="btn btn--form" type="submit">
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
