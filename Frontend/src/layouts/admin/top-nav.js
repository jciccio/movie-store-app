import PropTypes from 'prop-types';
import {
  Box,

} from '@mui/material';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';



export const TopNav = (props) => {
  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          top: 0,
          padding: 2,
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
      
          <Typography color="primary" variant="h3" align='center' alignitems="center" justifyContent="center">
            Video Store
          </Typography>

       
      </Box>
    
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
