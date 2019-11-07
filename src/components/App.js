import React from "react";
import { connect } from "react-redux";
import FormikForm from "./FormikForm";

import Title from "./Title";
import BookList from "./BookList";
import { getBooksInfo } from "../actions";

const App = ({ getBooksInfo }) => {
  return (
    <React.Fragment>
      <Title />
      <FormikForm
        onForm={values => {
          console.log("App,js", values);
          getBooksInfo(values);
        }}
      />
      <BookList />
    </React.Fragment>
  );
};

export default connect(
  null,
  { getBooksInfo }
)(App);
