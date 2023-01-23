// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under Construction';
    }
    default: return state;
  }
}

// ActionCreators

export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
