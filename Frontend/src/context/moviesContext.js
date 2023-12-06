import { createContext } from 'react';

export const MoviesContext = createContext({
  movies: [],
  setMovies: () => { }
});