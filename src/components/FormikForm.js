import React from "react";

import FormControl from "@material-ui/core/FormControl";
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
    <Field
      name={name}
      render={({ field }) => {
        // console.log("field", { ...field });
        // console.log("others", { ...others });
        return <OutlinedInput {...field} {...others} />;
      }}
    />
  );
};
const SelectInput = ({ name, ...others }) => {
  return (
    <Field
      style={{
        marginBottom: 12
      }}
      name={name}
      render={({ field }) => {
        // console.log("field", { ...field });
        // console.log("others", { ...others });
        return <Select {...field} {...others} />;
      }}
    />
  );
};

const FormikForm = ({ values, errors, touched, isSubmitting }) => {
  return (
    <React.Fragment>
      <Container
        maxWidth="sm"
        style={
          {
            // marginTop: "50px"
          }
        }
      >
        <Paper
          style={{
            border: "solid #3f51b5",
            padding: 15
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
                    style={{
                      marginBottom: 20
                    }}
                    type="text"
                    name="title"
                    value={values.title}
                    fullWidth
                  />
                  {touched.title && errors.title && <div>{errors.title}</div>}
                </Grid>
                <Grid
                  style={{
                    marginBottom: 20
                  }}
                  item
                  xs={10}
                >
                  <InputLabel shrink htmlFor="input-author">
                    著者
                  </InputLabel>
                  <Input
                    id="input-author"
                    type="text"
                    name="author"
                    fullWidth
                    // placeholder="Placeholder"

                    value={values.author}
                  />
                  {touched.author && errors.auhor && <div>{errors.auhor}</div>}
                </Grid>
                <Grid item xs={10}>
                  <InputLabel shrink htmlFor="input-isbn">
                    ISBN
                  </InputLabel>
                  <Input
                    id="input-isbn"
                    type="text"
                    name="isbn"
                    fullWidth
                    // placeholder="Placeholder"
                    style={{
                      marginBottom: 20
                    }}
                    value={values.isbn}
                  />
                  {touched.isbn && errors.isbn && <div>{errors.isbn}</div>}
                </Grid>
              </Grid>

              <Grid item xs container justify="center" spacing={3}>
                <Grid item container direction="column" alignItems="center">
                  <InputLabel>表示件数</InputLabel>
                  <SelectInput
                    displayEmpty="true"
                    variant="outlined"
                    type=""
                    name="count"
                    id="select-number"
                    value={values.count}
                    style={
                      {
                        // marginTop: 10
                      }
                    }
                  >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                  </SelectInput>
                  {/* </FormControl> */}
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    startIcon={<SearchIcon />}
                    // disabled={isSubmitting}
                  >
                    検索
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
    console.log(values);
    console.log(values.title);
    console.log("props", props);
    props.onForm(values);
    setSubmitting(false);
    resetForm();
  },
  validationSchema: yup.object().shape({
    title: yup.string().max(20, "タイトルは20字以内で！"),
    author: yup.string().max(10, "著者は10字以内で！"),
    isbn: yup
      .string()
      .max(13, "ISBNは10字か13字で！")
      .min(10, "ISBNは10字か13字で！")
  })
})(FormikForm);
