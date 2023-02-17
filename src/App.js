import AddMovie from './components/movies/AddMovie';
import Filter from './components/movies/Filter';
import MovieList from './components/movies/MovieList';

import { moviesData } from './data';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Filter />
          <AddMovie />
          <MovieList moviesData={moviesData} />
        </div>
      </div>
    </div>
  );
}

export default App;
