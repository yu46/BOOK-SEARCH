import React from "react";

import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  card: {
    border: "solid #3f51b5",
    width: "100%",
    maxWidth: 480,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  media: {
    height: 265,
    marginTop: 5,
    objectFit: "contain"
  },
  content: {
    height: 205,
    overflow: "scroll"
  },
  divider: {
    margin: "5px auto"
  }
}));

const BookModal = ({ open, handleClose, img, ...volumeInfo }) => {
  const classes = useStyle();
  //isbnの番号を取り出す処理。可読性が悪いので直したい。
  let isbn10 = "";
  let isbn13 = "";
  const isbnArray = volumeInfo.industryIdentifiers;
  if (isbnArray) {
    isbn10 = isbnArray.find(obj => {
      return obj.type === "ISBN_10";
    });
    isbn13 = isbnArray.find(obj => {
      return obj.type === "ISBN_13";
    });

    isbn10 = !(isbn10 === undefined) ? isbn10.identifier : "";
    isbn13 = !(isbn13 === undefined) ? isbn13.identifier : "";
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Grid item container sm justify="center">
        <Card raised={true} className={classes.card}>
          <CardMedia image={img} component="img" className={classes.media} />
          <Divider className={classes.divider} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h6" component="h2">
              {volumeInfo.title}
            </Typography>
            <Divider className={classes.divider} variant="middle" />
            <Typography variant="body1" color="textSecondary" component="p">
              {volumeInfo.description || <h2>no description</h2>}
            </Typography>
          </CardContent>
          <Divider className={classes.divider} />
          <CardContent>
            <Grid container>
              <Grid item xs container direction="column">
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  ページ数: {volumeInfo.pageCount}
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  出版日: {volumeInfo.publishedDate}
                </Typography>
              </Grid>
              <Grid item xs container direction="column">
                <Typography variant="body2" color="textSecondary" component="p">
                  ISBN10:{` ${isbn10}`}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  ISBN13:{` ${isbn13}`}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Modal>
  );
};

export default BookModal;
