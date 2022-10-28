import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Button from "/components/CustomButtons/Button.js";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import ImageCardBottom from "../../components/Card/ImageCardBottom";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);



export default function ProductSection() {
  const classes = useStyles();
  const jetsetCardContent = {
    paragraph: <p>
    The iPhone or iPad shows you a real time composite of your action foreground with your 3D background.
    <br />
    <br />
    It&apos;s just like shooting in the real world, except Jetset magically sees your desired background and figures out how to combine the live action.
    <br />
    <br />
    Meanwhile, you can shoot in the places you have. In a park, in a back yard, or in your house. You can shoot with or without a green screen. You can see here that there is no green screen so the matting was done with AI tools.
  </p>
  }
  const jetsetCardTitle = {
    title: <h4 className={classes.cardTitle}>Jetset</h4>
     
  }
  const afterburnerCardContent = {
    paragraph: <p>
    Virtual production is all about “selling the shot.” Do viewers only see the story and not your VFX techniques? For this, your final pixels have to do their job.
    <br />
    <br />
    Lightcraft Afterburner gives you a full Hollywood-style VFX pipeline on your desktop.
    <br />
    <br />
    Afterburner uses free tools such as Blender, Unreal, Davinci Resolve and many more. With easy two and three-minute tutorials we show you how to put everything together to build your own VFX pipeline that lets you do what Hollywood does, but for a tiny fraction of the cost.
  </p>
  }
  const afterburnerCardTitle = {
    title: <h4 className={classes.cardTitle}>Lightcraft Afterburner</h4>
  }
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>A Green Screen Anywhere Anytime</h2>
          <h5 className={classes.description}>
            Lightcraft Jetset brings the power of advanced virtual production to anyone with an iPhone or iPad.
            <br />
            <br />
            This scene of a futuristic train barrelling through the Austrailian Outback was shot outdoors on a grassy berm using an iPad at the beach in Santa Monica, California.
            <br />
            <br />
            The fight scenes took place on soft grass, and the matte was automatically geneated in the iPad using AI techniques.
          </h5>
          <Button
                color="danger"
                size="lg"
                href="https://vimeo.com/760090737/693be1e969"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
        </GridItem>
      </GridContainer>
      {/* <video playsInline autoPlay muted loop className={styles.video}>
        <source  src='/img/train.mp4' type='video/mp4'/>
      </video> */}
      <ImageCardBottom photo={`/img/beforeafter.png`} title="before and after" cardContent={jetsetCardContent.paragraph} cardTitle={jetsetCardTitle.title} />
      <ImageCardBottom photo={`/img/afterburner.png`} title="afterburner" cardContent={afterburnerCardContent.paragraph} cardTitle={afterburnerCardTitle.title} />

      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
