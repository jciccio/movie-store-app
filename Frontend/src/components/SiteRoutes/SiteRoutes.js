

import { Routes, Route } from 'react-router-dom';


import MoviesList from '../Movies/MoviesList';


function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesList />} />
      </Routes>
    </>
  );
}


export default SiteRoutes;
