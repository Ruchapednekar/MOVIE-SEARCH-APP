import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import Favorites from './components/Favorites';
import './App.css';

const API_KEY = '8b99a5ad'; 

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const searchMovies = async () => {
    if (!search.trim()) return;
    const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
    setMovies(response.data.Search || []);
  };

  const addToFavorites = (movie) => {
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      const updated = [...favorites, movie];
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    }
  };

  const removeFromFavorites = (id) => {
    const updated = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="App">
      <h1>🎬 Movie Search App</h1>
      <input
        type="text"
        value={search}
        placeholder="Search movies..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>

      <h2>Search Results</h2>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={false}
            onFavorite={addToFavorites}
          />
        ))}
      </div>

      <h2>My Favorites ❤️</h2>
      <Favorites favorites={favorites} onRemove={removeFromFavorites} />
    </div>
  );
}

export default App;
