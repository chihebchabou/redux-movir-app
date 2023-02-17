import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Rate = ({ setRating }) => {
  const rating = useSelector(state => state.movieReducer.rating);
  const dispatch = useDispatch();

  const stars = x => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span
            onClick={() => {
              dispatch(setRating(i));
            }}
            className="fs-4"
            key={i}
            style={style}
          >
            &#9733;
          </span>
        );
      } else {
        starArray.push(
          <span
            onClick={() => {
              dispatch(setRating(i));
            }}
            className="fs-4"
            key={i}
            style={style}
          >
            &#9734;
          </span>
        );
      }
    }

    return starArray;
  };
  return <div>{stars(rating)}</div>;
};

const style = {
  color: 'rgb(245, 164, 66)',
  cursor: 'pointer',
};

Rate.defaultProps = {
  setRating: () => {},
};

export default Rate;
