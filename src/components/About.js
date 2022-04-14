import React from 'react'
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
              Soy el contenido de la tarjeta
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
    },
    cardContainer: {
      border: 'solid #D7A86E 1.8px',
      width: '85vw',
      height: '70vh',
      display: 'flex',
    },
    boxImg: {
      width: '50vw',
      height: '50vh',
      display: 'flex',
      justifyContent: 'start',
      alignSelf: 'center',
    },
    imgAuthor: {
      marginLeft: 4,
      height: 'auto',
      border: 'solid #D7A86E 1.2px',
      borderRadius: '50%',
    },

  }))

export default About
