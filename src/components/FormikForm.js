import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const Input = ({ name, ...others }) => {
  return (
    <Field name={name}>
      {({ field }) => <OutlinedInput {...field} {...others} />}
    </Field>
  );
};

const SelectInput = ({ name, ...others }) => {
  return (
    <Field
      name={name}
      style={{
        marginBottom: 12
      }}
    >
      {({ field }) => <Select {...field} {...others} />}
    </Field>
  );
};

const FormikForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  handleReset,
  dirty
}) => {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Paper
          style={{
            border: "solid #3f51b5",
            padding: 20,
            marginBottom: 50
          }}
          elevation={4}
        >
          <Form
            style={{
              width: "100%"
            }}
          >
            <Grid container justify="center" alignItems="center" spacing={3}>
              <Grid container spacing={3} xs={9} item justify="center">
                <Grid item xs={10}>
                  <InputLabel shrink htmlFor="input-title">
                    タイトル
                  </InputLabel>
                  <Input
                    id="input-title"
                    type="text"
                    name="title"
                    value={values.title}
                    fullWidth
                  />
                  <div style={{ height: 8 }}>
                    {touched.title && errors.title && (
                      <div style={{ color: "#ee4056" }}>{errors.title}</div>
                    )}
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <InputLabel shrink htmlFor="input-author">
                    著者
                  </InputLabel>
                  <Input
                    id="input-author"
                    type="text"
                    name="author"
                    fullWidth
                  />
                  <div style={{ height: 8 }}>
                    {touched.author && errors.author && (
                      <div style={{ color: "#ee4056" }}>{errors.author}</div>
                    )}
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <InputLabel shrink htmlFor="input-isbn">
                    ISBN (半角数字)
                  </InputLabel>
                  <Input
                    id="input-isbn"
                    type="text"
                    name="isbn"
                    fullWidth
                    value={values.isbn}
                  />
                  <div style={{ height: 8 }}>
                    {touched.isbn && errors.isbn && (
                      <div style={{ color: "#ee4056" }}>{errors.isbn}</div>
                    )}
                  </div>
                </Grid>
              </Grid>

              <Grid item xs container justify="center" spacing={3}>
                <Grid item container direction="column" alignItems="center">
                  <InputLabel>表示件数</InputLabel>
                  <SelectInput
                    variant="outlined"
                    type=""
                    name="count"
                    id="select-number"
                    value={values.count}
                    style={{
                      marginTop: 5
                    }}
                  >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                  </SelectInput>
                </Grid>
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    size="large"
                    startIcon={<SearchIcon />}
                    disabled={isSubmitting}
                    style={{
                      width: 110
                    }}
                  >
                    検索
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleReset}
                    size="large"
                    disabled={!dirty || isSubmitting}
                    style={{
                      width: 110
                    }}
                  >
                    リセット
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default withFormik({
  mapPropsToValues({ title, author, isbn, count }) {
    return {
      title: title || "",
      author: author || "",
      isbn: isbn || "",
      count: count || "20"
    };
  },
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    props.onForm(values);
    setSubmitting(false);
  },
  validationSchema: yup.object().shape({
    title: yup.string().max(20, "タイトルは20字以内で！"),
    author: yup.string().max(10, "著者は10字以内で！"),
    isbn: yup
      .string()
      .matches(/^\d{10}$|^\d{13}$/, "ISBNは10字か13字の半角数字で！")
  })
})(FormikForm);
