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
    title: "Jetset"
     
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
    title: "Lightcraft Afterburner"
  }
  const freeCardTitle = {
    title: "Every Tool is Free and Powerful"
  }
  const freeCardContent = {
    paragraph: <p>
      Jetset and Afterburner are based on free, powerful tools, some with almost 30 years of development.
      <br />
      <br />
      Lightcraft started in 2004 and won the Emmy in 2013 for its real-time virtual production hardware and software. Now we are bringing that same power, and more, to your iPhone, iPad and desktop.
      <br />
      <br />
      We tie all these tools together into a seamless visual effects pipeline. The result is you get Hollywood power using the tools you already know and the hardware you already have.
    </p>
  }
  const logoGallery = [
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzEucG5nIiwiaWF0IjoxNjY2MDMxMDE0LCJleHAiOjE5ODEzOTEwMTR9.G6rdJ3PWFdPeEemrbIpYTtuYJq2u-W2FLKsFcXAWrFs',
      title: 'The Apple iPhone and iPad',
      description: 
      <p>
       <span className={classes.logo_card_title}>The Apple Iphone and Ipad</span> are central shooting tools for Jetset. Lightcraft&apos;s product that won the Emmy sold for $180,000, and yet the new Jetset and Afterburner can do more than that tool, and at higher quality.
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzIucG5nIiwiaWF0IjoxNjY2MDMxMDg2LCJleHAiOjE5ODEzOTEwODZ9.jwYNx54dcc_Zn6nJBIz0wt573b_Qay2PIxoPVZhZqL0',
      title: 'ARKit',
      description: 
      <p> <span className={classes.logo_card_title}>ARKit</span> is the core technology in the iPhone and iPad for virtual reality. This built-in software can track the exact motion of the phone in real time, at high accuracy.
        <br />
        <br />
        ARKit can render surprisingly complex models in real time and combine them with live shooting.
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzMucG5nIiwiaWF0IjoxNjY2MDMxMDk1LCJleHAiOjE5ODEzOTEwOTV9.7GG2Z_abkRocXu5ho3a7_PYRtBE074tanqhpOkd-LJ8',
      title: 'Universal Scene Description (USD)',
      description: 
      <p> <span className={classes.logo_card_title}>Universal Scene Description (USD)</span> is an open-source tool that solves the age-old problem of how to describe and render a highly complex scene, and do it in a cross-platform way.
        <br />
        <br />
        Apple has adopted USD as its internal 3D format. Many 3D tool are incorporating USD right now. Lightcraft is based on USD.
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzQucG5nIiwiaWF0IjoxNjY2MDMxMTAyLCJleHAiOjE5ODEzOTExMDJ9.hkOKfycWb72ua85dL3yFwVPG-kGp443rfh1R44CW2HU',
      title: 'Blender',
      description: 
      <p>
       <span className={classes.logo_card_title}>Blender</span> is the free and open-source 3D creation suite began development in 1994. On every quarterly release about 3.5 users download the software.
       <br />
       <br /> 
       Blender is a suite of 3D tools and we automate the use of many of them.
      </p>
      ,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzUucG5nIiwiaWF0IjoxNjY2MDMxMTExLCJleHAiOjE5ODEzOTExMTF9.KoxgcWK7Xc1AHvG68Zucrq5Ik9HmxXBkiaOyBJVDEgQ',
      title: 'Blender Compositing',
      description: 
      <p>
       <span className={classes.logo_card_title}>Blender Compositing</span> has just been upgraded to remarkable real-time performance. This means you can get the power of Hollywood compositers like Nuke right in your 3D workflow. 
       <br />
       <br /> 
       Afterburner makes extensive use of this compositing function and even automates its use.
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzYucG5nIiwiaWF0IjoxNjY2MDMxMTE5LCJleHAiOjE5ODEzOTExMTl9.na5KeMSLMwhTGVLT1WqROToyolaSW1MNjur9EdQAqms&t=2022-10-17T18%3A25%3A18.532Z',
      title: 'Blender EEVEE Renderer',
      description: 
      <p>
       <span className={classes.logo_card_title}>Blender EEVEE Renderer</span> has also been recently upgraded to remarkable real-time performance. It can show instant lighting changes without using ray tracing. 
       <br />
       <br /> 
       Afterburner uses EEVEE to generate high quality composited renders in near real time.
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_7.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzcucG5nIiwiaWF0IjoxNjY2MDMxMTI0LCJleHAiOjE5ODEzOTExMjR9.KXnYYmGCem_Mh19UD4DnQrDAI-hy0C66KKAgeWT2c3s',
      title: 'Blender Cycles Renderer',
      description: 
      <p>
       <span className={classes.logo_card_title}>Blender Cycles Renderer</span> is a high performance ray-tracing and path-tracing renderer. It takes much longer than EEVEE to generate a frame, but the level of quality it can provide is unmatched.
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_8.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzgucG5nIiwiaWF0IjoxNjY2MDMxMTMxLCJleHAiOjE5ODEzOTExMzF9.-ngp2M-z4VJvkiO6_zC9v6HNhMwO7KhrLQQGYVCcvys',
      title: 'Blender Cycles Render Farm',
      description: 
      <p>
       <span className={classes.logo_card_title}>Blender Cycles Render Farm</span> Blender has recently added a built-in render farm which can distribute rendering work to multiple machines. It works well and speeds up ray-tracing and path-tracing renders.
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_9.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzkucG5nIiwiaWF0IjoxNjY2MDMxMTM3LCJleHAiOjE5ODEzOTExMzd9.UWGENjRMcBV9pmJm1sGsNJBPOlRJp7X8SEuJuuDHeac',
      title: 'Nvidia Omniverse',
      description: 
      <p>
       <span className={classes.logo_card_title}>Nvidia Omniverse</span> is a powerful 3D collaboration and simulation system based on USD. Think of it as multi-platform 3D OS. 
       <br />
       <br /> 
       Omniverse provides “connectors” that let you integrate multiple 3D tools at your desk. We use Omniverse to make a seamless connection between Unreal, Blender and the iPhone. This makes it easy to use any content in the Unreal Store.
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_10.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzEwLnBuZyIsImlhdCI6MTY2NjAzMTAxNSwiZXhwIjoxOTgxMzkxMDE1fQ.9aTgkq1gM708zKC74PY9Mq2YEPz8ENfNKqgUsupa858',
      title: 'Blackmagic Davinci Resolve',
      description: 
      <p>
       <span className={classes.logo_card_title}>Blackmagic Davinci Resolves</span> is a powerful free editing system that we integrate into Afterburner. We also use some of its advanced noise reduction tools to get the very highest final image quality. (Those features are part of Resolve Studio which is a $300 one-time cost. This is the only paid upgrade that we recommend if you need that power.)
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_11.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzExLnBuZyIsImlhdCI6MTY2NjAzMTE1MSwiZXhwIjoxOTgxMzkxMTUxfQ.bILJwTsiLFSjAnG-iWO1onvk-rgSw1rSeb4Vdsb6vOo',
      title: 'Subversion (SVN)',
      description: 
      <p>
       <span className={classes.logo_card_title}>Subversion (SVN)</span> is a version control system that is particularily good at managing huge bindary files. While Github is newer and better known, it can&apos;t store differences of binary files which is key to keeping your store of 3D files from exploding. Subversion and its clients are free
      </p>,
    },
    {
      image: 'https://ygilhfemqrqnwjenenwa.supabase.co/storage/v1/object/sign/lightcraft.photos/logo_12.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaWdodGNyYWZ0LnBob3Rvcy9sb2dvXzEyLnBuZyIsImlhdCI6MTY2NjAzMTE1NywiZXhwIjoxOTgxMzkxMTU3fQ.L-F6dRz0kNdqFnTf5-mSTFit6AY2Z4mOpUdjEI30dLc',
      title: 'ZEROTIER',
      description: 
      <p>
       <span className={classes.logo_card_title}>ZEROTIER</span> lets you connect team members from anywhere in the world on any device. It makes all the devices appear as if they are on your local network. This means that you can share a large local raid drive as if it were in the cloud, but with no cloud costs. ZeroTier is free if used for less than 25 devices.
      </p>,
    },
  ]

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>A Green Screen Anytime Anywhere </h2>
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
      <ImageCardBottom photo={`/img/beforeafter.png`} title="before and after" cardContent={jetsetCardContent.paragraph} cardTitle={jetsetCardTitle.title} />
      <ImageCardBottom photo={`/img/afterburner.png`} title="afterburner" cardContent={afterburnerCardContent.paragraph} cardTitle={afterburnerCardTitle.title} />
      <ImageCardBottom title="freeAndPowerful" cardContent={freeCardContent.paragraph} cardTitle={freeCardTitle.title} />
      <div>
        <GridContainer>
          {logoGallery.map((logo, key) => {
            return (
              <GridItem xs={12} sm={12} md={6} lg={4}>
                <InfoArea
                  description={logo.description}
                  image={logo.image}
                  vertical
                />
              </GridItem>
            )
          })}
        </GridContainer>
      </div>
    </div>
  );
}
