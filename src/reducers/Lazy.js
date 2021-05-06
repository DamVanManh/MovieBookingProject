
const initialState = {
  isLazy: false,
}

const lazyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_LAZY_MOUNT": {
      return {
        ...state, isLazy: true,
      }
    }

    case "LOADING_LAZY_UNMOUNT": {
      return {
        ...state, isLazy: false,
      }
    }
    default:
      return state;
  }
}
export default lazyReducer;