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
    width: 480,
    height: 600,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  media: {
    height: 265,
    marginTop: 5,
    // margin: "5px auto",
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
  console.log("isbn", volumeInfo.industryIdentifiers);

  let isbn1;
  let isbn2;
  if (volumeInfo.industryIdentifiers) {
    switch (volumeInfo.industryIdentifiers[0].type) {
      case "ISBN_13":
        isbn1 = "ISBN13: ";
        break;
      case "ISBN_10":
        isbn1 = "ISBN10: ";
        break;
      default:
        isbn1 = "";
        break;
    }
    if (volumeInfo.industryIdentifiers[1])
      switch (volumeInfo.industryIdentifiers[1].type) {
        case "ISBN_13":
          isbn2 = "ISBN13: ";
          break;
        case "ISBN_10":
          isbn2 = "ISBN10: ";
          break;
        default:
          isbn2 = "";
          break;
      }
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
            <Divider className={classes.divider} middle />
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
                  {isbn1}
                  {volumeInfo.industryIdentifiers &&
                    volumeInfo.industryIdentifiers[0] &&
                    volumeInfo.industryIdentifiers[0].identifier}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {isbn2}
                  {volumeInfo.industryIdentifiers &&
                    volumeInfo.industryIdentifiers[1] &&
                    volumeInfo.industryIdentifiers[1].identifier}
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
