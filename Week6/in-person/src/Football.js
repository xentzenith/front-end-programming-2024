import React, { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    'Shawshank Redemption',
    'Interstellar',
    'Gravity',
    'The Avengers',
    'The Social Network',
    'Once upon a time in Hollywood'
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Favorite Movies</h1>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;