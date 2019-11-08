import React from "react";
import { connect } from "react-redux";
import FormikForm from "./FormikForm";
import { CssBaseline, Typography } from "@material-ui/core";

import Title from "./Title";
import BookList from "./BookList";
import { getBooksInfo } from "../actions";

const App = ({ getBooksInfo }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography
        style={{
          backgroundColor: "#fafafa"
        }}
        component="div"
      >
        <Title />
        <FormikForm
          onForm={values => {
            console.log("App,js", values);
            getBooksInfo(values);
          }}
        />
        <BookList />
      </Typography>
    </React.Fragment>
  );
};

export default connect(
  null,
  { getBooksInfo }
)(App);
