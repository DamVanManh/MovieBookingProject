import { GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS,GET_USER_LIST_FAIL }  from '../../constants/User/Users';

const initialState = {
  usersList: [],
  loading: false,
  error: null,
}

const usersList = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_REQUEST:{
      return {...state, loading: true, error: null};
    }

    case GET_USER_LIST_SUCCESS:{
      return {...state,
        usersList: action.payload.data,
        loading: false};
    }

    case  GET_USER_LIST_FAIL:{
      return {...state,
        error: action.payload.error,
        loading: false,};
    }
  
    default:
      return state;
  }
}
export default usersList;