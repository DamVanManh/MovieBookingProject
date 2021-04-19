import moviesApi from '../../api/moviesApi';
import theatersApi from '../../api/theatersApi';
import {
  GET_MOVIE_SHOWTIMES_REQUESS, GET_MOVIE_SHOWTIMES_SUCCESS, GET_MOVIE_SHOWTIMES_FAIL
} from '../constants/MovieDetail';

export const getMovieShowtimes = (movieId) => {
  return (dispath) => {
    dispath({
      type: GET_MOVIE_SHOWTIMES_REQUESS
    })
    theatersApi.getThongTinLichChieuPhim(movieId)
      .then(result => {
        dispath({
          type: GET_MOVIE_SHOWTIMES_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: GET_MOVIE_SHOWTIMES_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}
