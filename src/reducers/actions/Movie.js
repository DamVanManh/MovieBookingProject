import moviesApi from '../../api/moviesApi';
import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL } from '../constants/Movie';

export const getMovieList = (values) => {
  return (dispath) => {
    dispath({
      type: GET_MOVIE_LIST_REQUEST
    })
    moviesApi.getDanhSachPhim()
      .then(result => {
        dispath({
          type: GET_MOVIE_LIST_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: GET_MOVIE_LIST_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}