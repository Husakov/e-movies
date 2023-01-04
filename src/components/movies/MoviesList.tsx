import React from 'react';
import { Movie } from './../../interfaces/movie';
import './../../styles/components/Movies.css';

interface MoviesListProps {
    moviesList: Movie[];
    searchTerm: string;
    handleMovieSelection: (newValue: Movie) => void;
}

export const MoviesList: React.FC<MoviesListProps> = ({ moviesList, handleMovieSelection, searchTerm }) => {
    return (
        <ul className='col-6 list-unstyled movies-list'>
            {moviesList
                .filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(movie => (
                    <li key={movie.title} onClick={() => handleMovieSelection(movie)}>
                        <div className='d-flex px-4 py-3 movie'>
                            <div className='col-2 episodes'>EPISODE {movie.episode_id}</div>
                            <div className='col-6'>{movie.title}</div>
                            <div className='col-4 date'>{movie.release_date}</div>
                        </div>
                    </li>
                ))}
        </ul>
    );
};