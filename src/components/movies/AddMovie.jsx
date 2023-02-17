import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewMovie } from '../../redux/actions/movieActions';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    date: '',
    genre: '',
    description: '',
    posterURL: '',
    trailer: '',
    rating: '',
  });

  const dispatch = useDispatch();

  const { title, date, genre, description, posterURL, trailer, rating } = movie;

  const handleChange = event =>
    setMovie({ ...movie, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    const newMovie = {
      ...movie,
      rating: Number(movie.rating),
      id: Math.floor(Math.random() * 1000),
    };
    console.log(newMovie);
    dispatch(addNewMovie(newMovie));
    setMovie({
      title: '',
      date: '',
      genre: '',
      description: '',
      posterURL: '',
      trailer: '',
      rating: '',
    });
  };

  return (
    <div className="mb-5">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addMovie"
      >
        Add new movie
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="addMovie"
        tabIndex="-1"
        aria-labelledby="addMovieLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addMovieLabel">
                Add New Movie
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    name="genre"
                    value={genre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">
                    Rating
                  </label>
                  <input
                    type="number"
                    max={5}
                    min={0}
                    className="form-control"
                    id="rating"
                    name="rating"
                    value={rating}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="posterURL" className="form-label">
                    Poster
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="posterURL"
                    name="posterURL"
                    value={posterURL}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="trailer" className="form-label">
                    Trailer
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="trailer"
                    name="trailer"
                    value={trailer}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
