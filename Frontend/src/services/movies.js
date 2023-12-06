import { ROOT_URL } from '../environment';
import { backendCall } from '../helpers/apiManager';

const Movie = {
  getMovies() {
    return backendCall('GET', `${ROOT_URL}movies`)
  },
  async createMovie(id, useMeta = true) {
    return backendCall('POST', `${ROOT_URL}movies`, { title: id, fetchMetadata: useMeta })
  },
  updateMovie(id) {
    return backendCall('PATCH', `${ROOT_URL}movies/${id}`);
  }
};

export default Movie;
