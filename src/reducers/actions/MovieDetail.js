import commentApi from '../../api/commentApi';
import theatersApi from '../../api/theatersApi';
import {
  GET_MOVIE_SHOWTIMES_REQUESS, GET_MOVIE_SHOWTIMES_SUCCESS, GET_MOVIE_SHOWTIMES_FAIL,
  GET_COMMENT_REQUESS, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL,
  POST_COMMENT_REQUESS, POST_COMMENT_SUCCESS, POST_COMMENT_FAIL,
  LIKE_COMMENT_REQUESS, LIKE_COMMENT_SUCCESS, LIKE_COMMENT_FAIL,
} from '../constants/MovieDetail';

export const getMovieShowtimes = (movieId) => {
  return (dispatch) => {
    dispatch({
      type: GET_MOVIE_SHOWTIMES_REQUESS
    })
    theatersApi.getThongTinLichChieuPhim(movieId)
      .then(result => {
        dispatch({
          type: GET_MOVIE_SHOWTIMES_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_MOVIE_SHOWTIMES_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const getComment = () => {
  return (dispatch) => {
    dispatch({
      type: GET_COMMENT_REQUESS
    })
    commentApi.getComment()
      .then(result => {
        dispatch({
          type: GET_COMMENT_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_COMMENT_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}


export const postComment = (objComment) => {
  return (dispatch) => {
    dispatch({
      type: POST_COMMENT_REQUESS
    })
    commentApi.postComment(objComment)
      .then(result => {
        dispatch({
          type: POST_COMMENT_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: POST_COMMENT_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const likeComment = (id, commentUserLiked) => {
  return (dispatch) => {
    dispatch({
      type: LIKE_COMMENT_REQUESS
    })
    commentApi.likeComment(id, commentUserLiked)
      .then(result => {
        dispatch({
          type: LIKE_COMMENT_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: LIKE_COMMENT_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}