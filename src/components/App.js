import React from "react";
import Home from "./Home";
import TextInput from "./TextInput";
import Title from "./Title";
import FormikForm from "./FormikForm";

import { getBooksInfo } from "../actions";
import { connect } from "react-redux";

const App = ({ getBooksInfo }) => {
  return (
    <div>
      <Title />
      <FormikForm
        onForm={values => {
          console.log("App,js", values);
          getBooksInfo(values);
        }}
      />
      <TextInput />
      <Home />
    </div>
  );
};

export default connect(
  null,
  { getBooksInfo }
)(App);
