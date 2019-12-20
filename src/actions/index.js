import axios from "axios";

export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

// リクエスト開始
export const getBooksRequest = () => ({
  type: GET_BOOKS_REQUEST
});

// リクエスト成功
export const getBooksSuccess = json => ({
  type: GET_BOOKS_SUCCESS,
  items: json
});

// リクエスト失敗
export const getBooksFailure = error => ({
  type: GET_BOOKS_FAILURE,
  error
});

export const getBooksInfo = keyword => {
  const rootUrl = "https://www.googleapis.com/books/v1/volumes";
  const title = keyword.title ? `intitle:${keyword.title} +` : ``;
  const author = keyword.author ? `inauthor:${keyword.author} +` : ``;
  const isbn = keyword.isbn ? `isbn:${keyword.isbn} +` : ``;
  const params = {
    q: `${title}${author}${isbn}`,
    maxResults: keyword.count
  };
  return dispatch => {
    dispatch(getBooksRequest());
    return axios
      .get(rootUrl, { params })
      .then(response => {
        dispatch(getBooksSuccess(response.data.items));
      })
      .catch(error => {
        dispatch(getBooksFailure(error));
      });
  };
};
