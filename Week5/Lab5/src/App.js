import React, { useState } from 'react';
import './App.css';

function App() {

  const mv = [
    'Shawshank Redemption',
    'Interstellar',
    'Gravity',
    'The Avengers',
    'The Social Network',
    'Once upon a time in Hollywood'
  ]
  const [movies, setMovies] = useState(mv);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Favorite Movies</h1>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul> 
        <button onClick={() => {
          const newMovies = [...movies];
          newMovies.sort(() => Math.random() - 0.5);
          setMovies(newMovies);
        }}>Mix Order</button>
      </header>
    </div>
  );
}

export default App;