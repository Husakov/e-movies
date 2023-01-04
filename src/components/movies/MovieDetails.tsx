import React from 'react';
import { Movie } from './../../interfaces/movie';
import './../../styles/components/Movies.css';

interface MovieDetailsProps {
    selectedMovie: Movie | null;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({ selectedMovie }) => {

    return selectedMovie ? (
        <div className='col-6 p-5'>
            <h2 className='movie-title'>{selectedMovie.title}</h2>
            <p className='movie-description'>{selectedMovie.opening_crawl}</p>
            <p className='movie-description'>Directed by: {selectedMovie.director}</p>
        </div>
    ) : (
        <div className='col-6 no-movies'>
            <p>No movie selected</p>
        </div>
    )
};