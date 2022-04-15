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
          <Typography className={classes.fontTitle}  variant="h3" >-{" "}{title}:</Typography>
      
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
              /><br/>
              
              <TypeWriterEffect 
                text=" 🚀  -  Enthusiastic Dev.   "
                textStyle={{
                  fontSize:'1rem',
                  fontWeight: 450,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={4000}
                typeSpeed={100}
              /><br/>
              
              <TypeWriterEffect 
                text=" 💻  -  Full Stack Developer. "
                textStyle={{
                  fontSize:'1rem',
                  fontWeight: 450,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={7500}
                typeSpeed={100}
              /><br/>
              
              <TypeWriterEffect 
                text=" ⚛️  -  React/React Native Dev."
                textStyle={{
                  fontSize:'1rem',
                  fontWeight: 450,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={11500}
                typeSpeed={100}
              /><br/>
              
              
              <TypeWriterEffect 
                text=" ( 📚 ) => ( SCRUM Methodologies() )"
                textStyle={{
                  fontSize:'1rem',
                  fontWeight: 450,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={15000}
                typeSpeed={100}
              /><br/>
              
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
    fontTitle:{
      [theme.breakpoints.down('sm', 'm')]:{
        fontSize: '2.3rem',
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '1.75rem',
      },
    fontFamily: 'Beau Rivage ',
    marginTop: theme.spacing(4),
    fontWeight: 600,
    textShadow: "1.5px .8px #D7A86E",
    letterSpacing: "2px",
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
      display: 'flex',
      position: 'relative',
      marginTop: theme.spacing(2.5),
      backgroundColor: '#EEEEEE',
      border: 'solid #D7A86E 1.8px',
      width: '85vw',
      height: '80vh',
    },
    boxImg: {
      position: 'relative',
      width: '50vw',
      height: '50vh',
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    imgAuthor: {
      [theme.breakpoints.down('sm', 'm')]:{
        display: 'flex',
        justifyContent: 'start',
        width: '40vw',
        height: 'auto',
        alignSelf: 'center',
      },
      [theme.breakpoints.down('xs')]:{
        width: '30vw',
        height: 'auto',
      },
      margin: theme.spacing(0.8),
      height: 'auto',
      border: 'solid #D7A86E 1.2px',
      borderRadius: '50%',
    },
    cardContent: {
      [theme.breakpoints.down('sm')]:{
        width: '70vw',
        height: 'auto',
        fontWeight: 650,
      },
      [theme.breakpoints.down('xs')]:{
        width: '50vw',
        height: 'auto',
        fontSize: '.75rem',
      },
    },

  }))

export default About
