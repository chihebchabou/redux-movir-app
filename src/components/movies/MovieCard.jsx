import React from 'react';
import Rate from './Rate';

const MovieCard = ({ movie }) => {
  return (
    <div className="card mb-3">
      <img src={movie.posterURL} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <Rate />
        <p className="card-text">{movie.description}</p>
        <a href="#!" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
