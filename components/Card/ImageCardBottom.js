import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";

import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "/styles/jss/nextjs-material-kit.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  },
  imgCardBottom: {
  }
};

const useStyles = makeStyles(styles);

export default function ImageCardBottom(props) {
  const classes = useStyles();
  const { photo, alt, cardContent, cardTitle, ...rest } = props
  console.log(photo)
  return(
    <div>
      <Card>
        <CardBody>
            <h4 className={classes.cardTitle}>{cardTitle}</h4>
            {cardContent}
        </CardBody>
        <img className={classes.imgCardBottom} src={photo} alt={alt} />
      </Card>
    </div>
  );
};