import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])

const fetchMoviesHandler = () =>{
  fetch('https://dummyapi.online/api/movies')
  .then(response => {
   return response.json()
  })
  .then(data => {
    setMovies(data)
  })
  .catch()
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
