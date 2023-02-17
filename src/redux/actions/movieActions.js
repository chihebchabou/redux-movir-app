import { ADD_MOVIE, SET_RATING, SET_TITLE } from './types';

export const setTitle = title => {
  return {
    type: SET_TITLE,
    payload: title,
  };
};

export const setRating = rating => {
  return {
    type: SET_RATING,
    payload: rating,
  };
};

export const addNewMovie = newMovie => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};
