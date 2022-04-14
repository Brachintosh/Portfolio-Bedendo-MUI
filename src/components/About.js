import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import {
   makeStyles, Typography, Card, CardMedia, CardContent, Box
  } from "@material-ui/core";
import author from '../images/brachintosh-Img.jpg';

const About = ({ title, dark, id }) => {

const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
        <div className={classes.sectionContent} id={id} >
          <Typography variant="h3" >{title}:</Typography>

          <Card className={classes.cardContainer} >
            <Box className={classes.boxImg} >
              <img src={author} title="picture-brachintosh" className={classes.imgAuthor} />
            </Box>
            <CardContent className={classes.cardContent} >
              <TypeWriterEffect 
                text="Hi,I'm Brian Ezequiel Bedendo."
                textStyle={{
                  fontSize:'1.5rem',
                  fontWeight: 600,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={200}
                typeSpeed={100}
              />
              
              <TypeWriterEffect 
                text=" 🚀 Enthusiastic Dev.   "
                textStyle={{
                  fontSize:'1rem',
                  fontWeight: 450,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={3800}
                typeSpeed={100}
              />
              
            </CardContent>
          </Card>

        </div>
    </div>
  )
}

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    section:{
      paddingTop: '0.5em',
      minHeight:"100vh",
    },
    sectionDark:{
      background: "#361500",
      color: 'rgb(255, 248, 220)',
    },
    sectionContent: {
      maxWidth: "85vw",
      margin: "0 auto",
      marginTop: 10,
    },
    cardContainer: {
      position: 'relative',
      marginTop: theme.spacing(2.5),
      // fontWeight: 450,
      // color: '#795548',
      backgroundColor: '#EEEEEE',
      border: 'solid #D7A86E 1.8px',
      width: '85vw',
      height: '70vh',
      display: 'flex',
    },
    boxImg: {
      position: 'relative',
      width: '50vw',
      height: '50vh',
      display: 'flex',
      justifyContent: 'start',
      alignSelf: 'center',
    },
    imgAuthor: {
      margin: theme.spacing(0.8),
      height: 'auto',
      border: 'solid #D7A86E 1.2px',
      borderRadius: '50%',
    },
    cardContent: {

    },

  }))

export default About
