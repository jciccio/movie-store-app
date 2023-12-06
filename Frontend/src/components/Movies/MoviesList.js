import * as React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { useState } from 'react';
import { Layout } from '../../layouts/admin/layout';

import CommonCard from '../common/CommonCard';
import CreateForm from '../common/CreateForm';

import Movie from '../../services/movies';
import { MoviesContext } from '../../context/moviesContext';

const MoviesList = () => {

  //const { movies, setMovies } = useContext(MoviesContext);
  const [movies, setMovies] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  React.useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await Movie.getMovies();
      setMovies(moviesData?.movies); // Check if empty, should use ?
    };
    fetchMovies();
  }, []);

  const updateMovie = (id) => {
    const newMovies = movies.map((movie, index) => (
      id === movie.id ? { ...movie, ...{ likes: movie.likes + 1 } } : movie
    ));
    setMovies(newMovies);
  }

  const renderCreate = () => {
    if (showSearch) {
      return (
        <Grid container justifyContent={'center'} marginTop={2}>
          <CreateForm>
          <Grid container justifyContent="flex-end">
            <Button size="small" variant='outlined' onClick={() => { setShowSearch(!showSearch) }}>Close</Button>
            </Grid>
          </CreateForm>
        </Grid>
      )
    }
    else {
      return (
        <Grid container spacing={2} justifyContent={'center'} marginTop={2}>
          <Button variant='contained' onClick={() => { setShowSearch(!showSearch) }}>Add Movie</Button>
        </Grid>
      )
    }
  }

  const renderMovies = () => {
    return movies.map(function (movie, index) {
      return (
        <Grid item xs={4} key={movie.id}>
          <CommonCard
            title={movie.title}
            likes={movie.likes}
            sinopsis={movie.sinopsis}
            image={movie.image}
            id={movie.id}
            onLike={() => { Movie.updateMovie(movie.id); updateMovie(movie.id) }}
          />
        </Grid>
      )
    });
  }

  return (
    <Layout>
      <MoviesContext.Provider value={[movies, setMovies]}>
        {renderCreate()}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {movies && renderMovies()}
        </Grid>
      </MoviesContext.Provider>
    </Layout>
  )

};

export default MoviesList;