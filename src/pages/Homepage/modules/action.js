import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILED,
  DETAIL_MOVIE_MODAL,
} from "./constant";
// import moviesApi from "../../../../api/moviesApi";
import moviesApi from "../../../api/moviesApi";
const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    data,
  };
};
const actListMovieFailed = (error) => {
  return {
    type: LIST_MOVIE_FAILED,
    error,
  };
};

const actFetchListMoive = () => {
  return async (dispatch) => {
    dispatch(actListMovieRequest());
    try {
      const resData = await moviesApi.getDanhSachPhim();
      dispatch(actListMovieSuccess(resData));
    } catch (error) {
      dispatch(actListMovieFailed(error));
    }
  };
};

const actFindMovieTrailer = (movie) => {
  return {
    type: DETAIL_MOVIE_MODAL,
    movie,
  };
};

export { actFetchListMoive, actFindMovieTrailer };
