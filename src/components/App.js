import React from "react";
import Home from "./Home";
import TextInput from "./TextInput";
import Title from "./Title";
import FormikForm from "./FormikForm";

import { getBooksInfo } from "../actions";
import { connect } from "react-redux";

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
      <TextInput />
      <Home />
    </React.Fragment>
  );
};

export default connect(
  null,
  { getBooksInfo }
)(App);
