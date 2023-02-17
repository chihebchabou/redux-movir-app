import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  // const title = useSelector(state => state.movieReducer.title)
  // const rating = useSelector(state => state.movieReducer.rating)
  const { title, rating, moviesData } = useSelector(
    state => state.movieReducer
  );

  return (
    <Fragment>
      {moviesData
        .filter(
          el =>
            el.title.toLowerCase().includes(title.toLowerCase().trim()) &&
            el.rating === rating
        )
        .map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </Fragment>
  );
};

export default MovieList;
