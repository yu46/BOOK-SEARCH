import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from '../actions'

const initialState = {
  isFetching: false,
  items: []
}

const books = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items
      }
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}

export default books