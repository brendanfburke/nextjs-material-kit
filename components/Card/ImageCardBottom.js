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
          {/* <p>
            The iPhone or iPad shows you a real time composite of your action foreground with your 3D background.
            <br />
            <br />
            It's just like shooting in the real world, except Jetset magically sees your desired background and figures out how to combine the live action.
            <br />
            <br />
            Meanwhile, you can shoot in the places you have. In a park, in a back yard, or in your house. You can shoot with or without a green screen. You can see here that there is no green screen so the matting was done with AI tools.
          </p> */}
        </CardBody>
        <img className={classes.imgCardBottom} src={photo} alt={alt} />
      </Card>
    </div>
  );
};