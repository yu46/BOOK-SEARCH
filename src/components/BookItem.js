import * as React from "react";

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
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import BookModal from "./Modal";

const { useState } = React;

const BookItem = ({ volumeInfo }) => {
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClick = () => setOn(!on);

  const callback = () => setLike(!like);

  console.log("searchInfo");
  console.log(volumeInfo.imageLinks);
  console.log("link", volumeInfo.infoLink);
  if (volumeInfo.imageLinks) {
    console.log(volumeInfo.imageLinks.thumbnail);
  }
  let img;
  if (volumeInfo.imageLinks) {
    img = volumeInfo.imageLinks.thumbnail;
  } else {
    img = noimage;
  }

  const useStyles = makeStyles({
    card: {
      width: 345,
      height: 330,
      border: "solid #3f51b5"
    },
    media: {
      height: 160,
      marginTop: 5,
      objectFit: "contain"
    },
    main: {
      height: 268,
      marginBottom: 5,
      overflow: "hidden"
    }
  });
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item container sm justify="center">
        <Card className={classes.card} raised={true}>
          <CardActionArea onClick={handleOpen} className={classes.main}>
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
          <BookModal
            {...volumeInfo}
            open={open}
            handleClose={handleClose}
            img={img}
          />
          <Divider variant="middle" />
          <Grid container justify="space-around" alignItems="center">
            <CardActions>
              <IconButton onClick={callback}>
                <FavoriteIcon
                  style={{
                    color: like ? "#ee4056" : ""
                  }}
                />
              </IconButton>
              <IconButton onClick={handleClick}>
                <ShareIcon
                  style={{
                    visibility: on ? "hidden" : ""
                  }}
                />
              </IconButton>
              <Typography>
                <Link
                  href={volumeInfo.infoLink}
                  style={{
                    textDecoration: "none"
                  }}
                  // onClick={e => e.preventDefault()}
                >
                  <Button size="small" color="primary">
                    Link
                  </Button>
                </Link>
              </Typography>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default BookItem;
