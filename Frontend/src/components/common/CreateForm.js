import * as React from 'react';

import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';

import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


import { useContext } from 'react';

import { MoviesContext } from '../../context/moviesContext';

import Movie from '../../services/movies';



export default function CreateForm({ values, label, children }) {

  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useContext(MoviesContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await Movie.createMovie(data.get('title'));
    const moviesData = await Movie.getMovies();
    setMovies(moviesData?.movies);
  };

  return (
    <FormControl >
      <Card variant="outlined" sx={{ padding: '20px 20px', backgroundColor: 'rgba(239, 239, 239, 0.2)' }}>
        <Box component="form" onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {children}
              <TextField
                margin="normal"
                fullWidth
                id="title"
                label="Movie Title"
                name="title"
                autoFocus
                required
                style={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" variant='contained'>Save Movie</Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </FormControl>
  );
}

CreateForm.propTypes = {
  children: PropTypes.node,
};

CreateForm.defaultProps = {

};