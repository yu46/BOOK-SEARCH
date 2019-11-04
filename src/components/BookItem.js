import React from "react";

import noimage from "../images/noimage.png";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const BookItem = ({ volumeInfo }) => {
  console.log("searchInfo");
  console.log(volumeInfo.imageLinks);
  if (volumeInfo.imageLinks) {
    console.log(volumeInfo.imageLinks.thumbnail);
  }
  let img;
  if (volumeInfo.imageLinks) {
    img = volumeInfo.imageLinks.thumbnail;
    // img = <img src={volumeInfo.imageLinks.thumbnail} alt="" />;
  } else {
    img = noimage;
  }

  const useStyles = makeStyles({
    card: {
      width: 345,
      height: 330
    },
    media: {
      // maxWidth: 345,
      height: 160,
      marginTop: 5,
      objectFit: "contain"
    },
    main: {
      height: 268,
      marginBottom: 5
    }
  });
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <ul>
        <li>タイトル: {volumeInfo.title}</li>
        <li>著者: {volumeInfo.authors}</li>
        <li>説明: {volumeInfo.description}</li>
        {img}
      </ul> */}
      <Grid item container sm justify="center">
        <Card className={classes.card} raised={true}>
          {/* <Grid item> */}
          <CardActionArea className={classes.main}>
            <CardMedia className={classes.media} image={img} component="img" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {volumeInfo.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                noWrap
              >
                {volumeInfo.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* </Grid> */}
          <Divider variant="middle" />
          <Grid container justify="space-around" alignItems="center">
            <CardActions>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default BookItem;
