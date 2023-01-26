import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Component imports
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <div className="categories-container">
      <h1 className="categories-title">{status}</h1>
      <button className="btn" type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
}
