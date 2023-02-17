import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../../redux/actions/movieActions';
import Rate from './Rate';
import { setRating } from '../../redux/actions/movieActions';

const Filter = () => {
  const title = useSelector(state => state.movieReducer.title);
  const dispatch = useDispatch();

  const onChange = e => dispatch(setTitle(e.target.value));
  return (
    <div className="my-5">
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={onChange}
      />
      <Rate setRating={setRating} />
    </div>
  );
};

export default Filter;
