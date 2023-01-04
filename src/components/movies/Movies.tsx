import React, { useState, useEffect } from 'react';
import { Movie } from './../../interfaces/movie';
import './../../styles/components/Movies.css';
import { Search } from '../search/Search';
import { MovieDetails } from './MovieDetails';
import { MoviesList } from './MoviesList';
import { Sort } from '../search/Sort';

interface MoviesProps {
  movies: Movie[];
}

export const Movies: React.FC<MoviesProps> = ({ movies }) => {
  const [moviesList, setMovies] = useState(movies);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Sort by...');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const resetMovies = () => {
    setMovies(movies);
  };

  const sortMovies = () => {
    let sortedMovies = [...movies];

    if (sortBy === 'year') {
      sortedMovies.sort((a, b) => {
        const dateA = Date.parse(a.release_date);
        const dateB = Date.parse(b.release_date);
        return dateA - dateB;
      });
    } else if (sortBy === 'episodes') {
      sortedMovies.sort((a, b) => b.episode_id - a.episode_id);
    }
    setMovies(sortedMovies);
  };

  useEffect(() => {
    sortMovies();
  }, [sortBy]);

  useEffect(() => {
    setMovies(movies);
  }, [movies]);

  const handleMovieSelection = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <div className='d-flex search p-3'>
        <Sort
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortMovies={sortMovies}
          resetMovies={resetMovies}
        />
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className='d-flex'>
        <MoviesList
          moviesList={moviesList}
          searchTerm={searchTerm}
          handleMovieSelection={handleMovieSelection}
        />
        <MovieDetails selectedMovie={selectedMovie} />
      </div>
    </div>
  );
};