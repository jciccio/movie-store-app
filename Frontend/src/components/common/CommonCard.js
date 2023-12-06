import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';


export default function CommonCard({ title, sinopsis, onLike, likes, image }) {

  const renderImage = () => {
    return (image && image.length > 0 &&
      <Box
        component="img"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          margin: '5px auto',
          maxHeight: { xs: 150, md: 200 },
          maxWidth: { xs: 250, md: 300 }
        }}
        alt={title}
        src={image}
      />
    )
  }

  return (
    <>
      <Card sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }} >
        <CardContent>
          <Typography variant="h5" align='center'>
            {title}
          </Typography>
          <Typography variant="body2" align='center'>
            {likes} likes
          </Typography>
          <Typography variant="body2" align='center'>
            {sinopsis}
          </Typography>
          {renderImage()}
          <CardActions sx={{ justifyContent: 'center' }}>
            {/*  <Button size="small">Learn More</Button> */}
            <Button onClick={onLike} size="small">Like</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}

CommonCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onLike: PropTypes.func,
  sinopsis: PropTypes.string,
  image: PropTypes.string,
  likes: PropTypes.number
};

CommonCard.defaultProps = {
  title: 'Unknown',
  sinopsis: 'Sinopsis goes here',
  onLike: null,
  image: null,
  likes: 0
};