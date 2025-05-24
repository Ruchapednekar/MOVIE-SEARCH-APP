import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, isFavorite, onFavorite, onRemove }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      {!isFavorite ? (
        <button onClick={() => onFavorite(movie)}>➕ Add to Favorites</button>
      ) : (
        <button onClick={() => onRemove(movie.imdbID)}>❌ Remove</button>
      )}
    </div>
  );
};

export default MovieCard;
