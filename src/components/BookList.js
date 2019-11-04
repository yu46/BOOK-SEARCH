import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import BookItem from "./BookItem";

const BookList = ({ books }) => {
  console.log("mapの前");
  console.log(books.items);

  // console.log(books.items.volumeInfo.imageLinks.thumnail)
  if (books.items) {
    return (
      <Container>
        <Grid
          container
          justify="center"
          spacing={4}
          // sm={11}
        >
          {books.items.map((item, index) => {
            return <BookItem key={index} {...item} />;
          })}
        </Grid>
      </Container>
    );
  } else {
    return <h1>一致する検索結果はありません。</h1>;
  }
};

const mapStateToProps = state => ({
  books: state
});

export default connect(mapStateToProps)(BookList);
