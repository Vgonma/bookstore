// Actions

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK: {
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];
    }

    case REMOVE_BOOK: {
      return [...state].filter((item) => item !== action.id);
    }

    default: return state;
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    title: book.title,
    author: book.author,
    id: book.id,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    title: book.title,
    author: book.author,
    id: book.id,
  };
}
