import { v4 as uuidv4 } from 'uuid';
// Actions

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const defaultState = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    id: uuidv4(),
  },
  {
    title: 'Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    id: uuidv4(),
  },
  {
    title: 'Lord of the Rings: The Two Towers',
    author: 'J.R.R. Tolkien',
    id: uuidv4(),
  },
  {
    title: 'Lord of the Rings: The Return of The King',
    author: 'J.R.R. Tolkien',
    id: uuidv4(),
  },
];

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_BOOK: {
      return [
        ...state,
        action.book,
      ];
    }

    case REMOVE_BOOK: {
      return state.filter((item) => item.id !== action.id);
    }

    default: return state;
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(bookId) {
  return {
    type: REMOVE_BOOK,
    id: bookId,
  };
}
