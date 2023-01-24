import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Component imports
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <div>
      <h1>{status}</h1>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
}
