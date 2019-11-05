import React from "react";
import { getBooksInfo } from "../actions";
import { connect } from "react-redux";

import BookList from "./BookList";

//
const Home = ({ dispatch }) => {
  const keyword = {
    title: "はらぺこあおむし",
    author: "",
    isbn: "",
    count: 40
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(getBooksInfo(keyword));
        }}
      >
        はらぺこあおむし
      </button>
      <BookList />
    </div>
  );
};

export default connect()(Home);
