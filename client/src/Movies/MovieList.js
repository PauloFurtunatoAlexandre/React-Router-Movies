import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const allMovies = () => {
      axios.get('http://localhost:5000/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }

    allMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  return (
    <MovieCard movie={movie} />
  );
}

export default MovieList;
