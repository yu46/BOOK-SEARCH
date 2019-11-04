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

// https://www.googleapis.com/books/v1/volumes?q=intitle:harry

export const getBooksInfo = keyword => {
  const rootUrl = "https://www.googleapis.com/books/v1/volumes";

  const params = {
    q: `intitle:${keyword}`,
    maxResults: 40
    // q: `intitle:${keyword} + inauthor:エリック・カール`
  };
  console.log("getBooksInfo/action.js");
  return dispatch => {
    dispatch(getBooksRequest());
    // return axios.get(`${rootUrl}?q=intitle:${keyword}`)
    return axios
      .get(rootUrl, { params })
      .then(response => {
        console.log("actions.js");
        console.log(response.data);
        console.log(response.data.items);
        dispatch(getBooksSuccess(response.data.items));
      })
      .catch(error => {
        console.log("err");
        dispatch(getBooksFailure(error));
      });
  };
};
