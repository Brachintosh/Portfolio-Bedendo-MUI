import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import {
   makeStyles, Typography, Card, CardActions, CardContent, Box, Button
  } from "@material-ui/core";
import author from '../images/brachintosh-Img.jpg';
import resumeBedendo from '../images/Bedendo Resume.pdf';
import jsIcon from '../images/icons8-javascript.gif';
import reactIcon from '../images/icons8-react.svg';
import reduxIcon from '../images/icons8-redux.svg';
import htmlIcon from '../images/icons8-html-5.svg';
import cssIcon from '../images/icons8-css3.svg';
import tailwindIcon from '../images/Tailwind_CSS_Logo.svg.png';
import mUI_Icon from '../images/material-ui-logo1.png';
import gitIcon from '../images/icons8-git.svg';
import githubIcon from '../images/icons8-github-144.png';
import scrumIcon from '../images/icons8-scrum-64.png';
import postgreIcon from '../images/icons8-postgresql.svg';

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
                  fontSize:'1.6rem',
                  fontWeight: 600,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={200}
                typeSpeed={100}
              /><br/>
              
              <TypeWriterEffect 
                text=" 💻  -  Full Stack Developer. "
                textStyle={{
                  fontSize:'1.2rem',
                  fontWeight: 450,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={4000}
                typeSpeed={100}
              /><br/>

              <TypeWriterEffect 
                text=" ✍️  -  Enthusiastic Dev.   "
                textStyle={{
                  fontSize:'1.2rem',
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
                  fontSize:'1.2rem',
                  fontWeight: 450,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={11500}
                typeSpeed={100}
              /><br/>
              
              
              <TypeWriterEffect 
                text=" 📚  - SCRUM Methodologies."
                textStyle={{
                  fontSize:'1.2rem',
                  fontWeight: 450,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={15000}
                typeSpeed={100}
              /><br/>
              
              <TypeWriterEffect 
                text=" ✅ - Knack of building applications with Front-end and Back-end operations."
                textStyle={{
                  fontSize:'1.2rem',
                  fontWeight: 450,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={18500}
                typeSpeed={100}
              /><br/>



              <Typography variant="h6" className={classes.descriptionText} >
              👨‍💻 {"  - "}<u> About me</u>:<br/>
                  {"  - "}Full stack web developer.<br/> 🚀  I consider myself a curious person, who likes to investigate on their own, an eternal self-taught student with an insatiable thirst for knowledge.<br/>
                  ⚡ Persevering and determined in the face of any obstacle to overcome, with a good capacity for integration when working as a team. Critical and organized, to keep track of tasks. Always curious in other languages ​​and cultures.<br/><br/>

                  💻 {"  - "}<u>Tech Skills</u>:<br/>
                  ★ Design: #figma<br/>
                  ★ Back-end: #nodejs - #express - #sequelize<br/>
                  ★ Front-end: {" "}
                  {" "}<img src={jsIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem',  }}/> JavaScript -{" "}
                  <img src={reactIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> React -{" "}
                  <img src={reduxIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> Redux -{" "}
                  <img src={htmlIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> HTML5 -{" "}
                  <img src={cssIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> CSS3 -{" "}{" "}
                  <img src={tailwindIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> Tailwind -{" "}
                  <img src={mUI_Icon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> Material UI {" "}<br/>
                  ★ Data-base: {" "}
                  <img src={postgreIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> PostgreSQL {" "}
                   - #postman<br/>
                  ★ Networking: {" "}
                  <img src={gitIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> Git -{" "}{" "}
                  <img src={githubIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> GitHub -{" "}{" "}
                  <img src={scrumIcon} alt='img-not-found' style={{height:'1.7rem', width:'1.7rem' }}/> SCRUM{" "}{" "}<br/>
              </Typography>

              <Typography>
                
              </Typography>
              
            </CardContent>
          
            <CardActions>
              <Button className={classes.bntResume} variant='contained' size='large'>
                <a href={resumeBedendo} download >
                  Get Resume
                </a>
              </Button>
            </CardActions>

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
      minHeight:"fit",
      paddingBottom: '3rem',
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
      border: 'solid #D7A86E 2.4px',
      borderRadius: '12px',
      boxShadow: "1.2px .8px 8px .7px #EEEEEE",
      width: '86vw',
      height: 'fit',
      paddingBottom: theme.spacing(20),
    },
    descriptionText: {
      color: "#6F574A",
      textShadow: "1px .8px #D7A86E" ,
      fontWeight: 450,
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
      // boxShadow: "2px 3px 7px 1px #795548",
      // boxShadow: "7px 6px 10px 2px  #FDD835",
      boxShadow: "3px 3px 10px 2px #BDBDBD",
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
    bntResume: {
      [theme.breakpoints.down("sm")]: {
        bottom: 32,
        right: 40,
      },
      position: 'absolute',
      bottom: '3rem',
      right: '4rem',
      padding: theme.spacing(1.8),
      backgroundColor: '#D7A86E',
      border: ' solid .8px rgb(255, 248, 220)',
      borderRadius: '12px',
      transition: 'all .45s',
      boxShadow: "2px 3px 4px 1px #795548",
      "& a": {
        textDecoration: 'none',
        color: 'rgb(255, 248, 220)',
        fontWeight: 700,
        textShadow: "1.5px .8px #795548",
        letterSpacing: "1.5px",
      },
      "&:hover":{
        backgroundColor: 'rgb(255, 248, 220)',
        border: 'solid #D7A86E 2px',
        boxShadow: "2px 3px 4px 1px #795548",
      },
      "& a:hover": {
        transition: 'all .45s',
        textDecoration: 'none',
        textShadow: "1.5px .8px #D7A86E",
        color: "#795548",
        fontWeight: 700,
        letterSpacing: "1.5px",
      },
    },

  }))


export default About;
