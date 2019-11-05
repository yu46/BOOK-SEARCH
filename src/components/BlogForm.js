import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input as ReactstrapInput,
  FormFeedback
} from "reactstrap";
import { withFormik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
const Input = ({ name, ...others }) => (
  <Field
    name={name}
    render={({ field }) => <ReactstrapInput {...field} {...others} />}
  />
);
const ErrorFormFeedback = ({ name }) => (
  <ErrorMessage
    name={name}
    component={({ children }) => <FormFeedback>{children}</FormFeedback>}
  />
);
const ErrorInnerMessage = ({ name }) => (
  <ErrorMessage
    name={name}
    component={({ children }) => (
      <span className="text-danger" style={{ fontSize: "1.2rem" }}>
        {children}
      </span>
    )}
  />
);
const MyForm = ({
  handleSubmit,
  handleReset,
  isSubmitting,
  dirty,
  errors,
  touched
}) => (
  <div className="mx-auto col-8">
    <h2>My Form</h2>
    <Form className="text-left" onSubmit={handleSubmit}>
      <FormGroup className="mb-2">
        <Label for="myEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="myEmail"
          placeholder="Enter email"
          valid={dirty && !errors.email}
          invalid={touched.email && !!errors.email}
        />
        <ErrorFormFeedback name="email" />
      </FormGroup>
      <FormGroup className="mb-2">
        <Label for="myUsername">Username</Label>
        <Input
          type="text"
          name="username"
          id="myUsername"
          placeholder="Enter username"
          valid={dirty && !errors.username}
          invalid={touched.username && !!errors.username}
        />
        <ErrorFormFeedback name="username" />
      </FormGroup>
      <FormGroup className="mb-2">
        <Label for="myPassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="myPassword"
          placeholder="Enter password"
          valid={dirty && !errors.password}
          invalid={touched.password && !!errors.password}
        />
        <ErrorFormFeedback name="password" />
      </FormGroup>
      <FormGroup className="mb-2" tag="fieldset">
        <legend>Gender</legend>
        <FormGroup inline check>
          <Label check>
            <Input type="radio" name="gender" value="male" />
            male
          </Label>
        </FormGroup>
        <FormGroup inline check>
          <Label check>
            <Input type="radio" name="gender" value="female" />
            female
          </Label>
        </FormGroup>
        <span className="ml-3">
          <ErrorInnerMessage name="gender" />
        </span>
      </FormGroup>
      <FormGroup check className="mb-2">
        <Input type="checkbox" name="isAccepted" id="myCheck" />
        <Label for="myCheck" check>
          Accept
        </Label>
        <span className="ml-3">
          <ErrorInnerMessage name="isAccepted" />
        </span>
      </FormGroup>
      <div className="d-flex justify-content-center">
        <span className="p-2">
          <Button
            type="button"
            outline
            color="secondary"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </Button>
        </span>
        <span className="p-2">
          <Button type="submit" outline color="primary" disabled={isSubmitting}>
            Submit
          </Button>
        </span>
      </div>
    </Form>
  </div>
);
const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    username: "",
    email: "",
    password: "",
    gender: "",
    isAccepted: false
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 3000);
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Enter a correct email ")
      .required("Enter an email"),
    username: yup
      .string()
      .min(3, "A username must contain more than 3 characters")
      .required("Enter a username"),
    password: yup
      .string()
      .min(8, "A username must contain more than 8 characters")
      .required("Enter a password"),
    gender: yup
      .string()
      .oneOf(["male", "female"])
      .required("Check a gender"),
    isAccepted: yup.boolean().oneOf([true], "Must accept terms and conditions")
  })
})(MyForm);
export default MyEnhancedForm;
