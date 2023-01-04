import { useEffect, useState } from 'react';
import { Movie } from './interfaces/movie';
import { Movies } from './components/movies/Movies';

interface MoviesApiFormat {
  count: number;
  results: Movie[]
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi.dev/api/films/?format=json');
      const json: MoviesApiFormat = await response.json();
      setMovies(json.results);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      {movies ? (
        <Movies movies={movies} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
