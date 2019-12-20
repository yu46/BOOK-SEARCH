import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import BookItem from "./BookItem";

const BookList = ({ books }) => {
  if (books.items) {
    return (
      <Container>
        <Grid container justify="center" spacing={4}>
          {books.items.map((item, index) => {
            return <BookItem key={index} {...item} />;
          })}
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="sm">
        <Paper
          style={{
            border: "solid #3f51b5"
          }}
          elevation={4}
        >
          <Typography align="center" variant="h5" component="h1">
            一致する検索結果はありません。
          </Typography>
        </Paper>
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  books: state
});

export default connect(mapStateToProps)(BookList);
