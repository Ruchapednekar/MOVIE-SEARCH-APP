import React from 'react';
import MovieCard from './MovieCard';
import './Favorites.css';

const Favorites = ({ favorites, onRemove }) => {
  return (
    <div className="favorites">
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        favorites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={true}
            onRemove={onRemove}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
